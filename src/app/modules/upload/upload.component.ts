import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { openClose } from 'src/app/utils/animations/animations';

@Component({
  selector: 'app-upload',
  animations: [
    openClose
  ],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  isOpen = true;
  form: FormGroup;
  response;
  imgUrl;
  baseUrl = 'http://localhost:8000/';

  constructor(
    private uploadService: FileUploadService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      file: [null],
      name: ['', Validators.required]
    });
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
  openSnackBar(message, action) {
    const snackBarRef = this.snackBar.open(message, action, {duration: 4000});
    snackBarRef.afterDismissed().subscribe(
      () => console.log('Dismissed')
    );
  }
  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.get('file').setValue(file);
      // console.log(this.form.get('file'));
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('file').value);
    formData.append('name', this.form.get('name').value);
    console.log(formData);
    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        // this.imgUrl = `${this.baseUrl}${res.file}`;
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
