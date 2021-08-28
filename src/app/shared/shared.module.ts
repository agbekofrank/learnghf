import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ModalComponent } from './components/modal/modal.component';
import { AgMaterialModule } from '../material.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MessageComponent,
    FileUploadComponent,
    ModalComponent,
    NotificationsComponent,
    SpinnerComponent
  ],
  entryComponents: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    AgMaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MessageComponent,
    FileUploadComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
