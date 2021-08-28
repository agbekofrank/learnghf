import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUser() ? JSON.parse(this.authService.getUser()) :
    this.authService.getUser();
  }

}
