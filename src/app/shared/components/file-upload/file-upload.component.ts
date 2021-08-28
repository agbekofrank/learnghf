import { Component, OnInit, Input, HostListener, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
    providers: [
      {provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FileUploadComponent), multi: true}]
})
export class FileUploadComponent implements OnInit {
  @Input() progress; // to do: create the progress component
  onChange: Function;

  public file: File | null = null;

  /**
   * @param event
   * I registered a change event listener that emits the files that the user uploads.
   * In our case I'm interested only in one file, so I’ll use the item() method,
   * passing the first index to obtain a reference to it.
   */
  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  constructor(
    private host: ElementRef<HTMLInputElement>
  ) { }

  ngOnInit(): void {
  }
  writeValue(value: null) {
    // clear file input form
    this.host.nativeElement.value = '';
    this.file = null;
  }
  registerOnChange(fn: Function) {
    this.onChange = fn;
  }
  registerOnTouched( fn: Function ) {
    // on touch: to do
  }

}
