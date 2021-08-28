import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
// import { delay, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'default';
  sideBarOpen;
  private mediaSub: Subscription;

  constructor(
    // private cdRef: ChangeDetectorRef,
    // private mediaObserver: MediaObserver,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.sideBarOpen = false;
  }
  ngAfterViewInit(): void { }
  ngOnDestroy(): void { }
  sidebarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  sideBarClose() {
    if (this.sideBarOpen) {
      this.sideBarOpen = false;
    }
  }

}
