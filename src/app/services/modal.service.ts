import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog
  ) { }

  openConfirmDialog(msg) {
    return this.dialog.open(ModalComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      },
      position: {top: '10px'}
    });
  }
}
