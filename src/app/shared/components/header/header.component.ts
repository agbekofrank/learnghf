import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  user;

  @Output() togSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  // refresh = this.authService.refresh();
  ngOnInit(): void {
    this.user = this.authService.getUser() ? JSON.parse(this.authService.getUser()).username :
    this.authService.getUser();
    // console.log(this.user);
  }
  logout() {
    this.authService.logout();
    this.route.navigate(['/accounts/login']);
  }
  togSidebar() {
    this.togSidebarForMe.emit();
  }
}
