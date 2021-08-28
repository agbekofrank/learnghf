import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountsComponent } from './accounts.component';
import { RouterModule } from '@angular/router';
import { AgMaterialModule } from '../material.module';
// import { AuthService } from './auth.service';
// import { AuthGuard } from './auth.guard';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [LoginComponent, SignupComponent, AccountsComponent],
  providers: [
    // AuthService,
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  imports: [
    CommonModule,
    AgMaterialModule,
    RouterModule
  ]
})
export class AccountsModule { }
