import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { AuthService } from './services/auth.service';


declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learngh';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        gtag('config', 'UA-167499519-1', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
  ngOnInit() {
    // this.authService.logout();
  }
}
// constructor(public router: Router){
//   this.router.events.subscribe(event => {
//      if(event instanceof NavigationEnd){
//          gtag('config', 'xx-xxxxx-xx', 
//                {
//                  'page_path': event.urlAfterRedirects
//                }
//               );
//       }
//    }
// )}

