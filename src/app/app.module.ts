import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './accounts/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthInterceptor, ErrorInterceptor } from './utils/interceptors/interceptors';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter,  MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import { DatePipe } from '@angular/common';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GoogleAnalyticsService } from './services/google-analytics.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    NgbModule,
    HttpClientModule,
    DefaultModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgHttpLoaderModule.forRoot()


  ],
  providers: [
    GoogleAnalyticsService,
    AuthService,
    AuthGuard,
    ErrorInterceptor,
    AuthInterceptor,
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    {provide:
      DateAdapter, useClass:
      MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['notifications'],
    }}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
