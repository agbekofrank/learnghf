import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  errorMsg;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // if (this.data) {
    //   if (this.data.includes('Error Code')) {
    //     this.data.includes('400') ?
    //     this.data = 'Your username and passwords do not match!' :
    //     this.data.includes('500') ?
    //     this.data = 'The server is down at the moment, please try again' :
    //     this.data = this.data;

    //     // if (this.data.includes('400')) {
    //     //   this.data = 'Your username and passwords do not match! ';
    //     // }else {
    //     //   if 
    //     // }
    //   }
    //   // console.log(this.data);

    // }
  }
}
