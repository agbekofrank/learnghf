import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';
import { Injectable } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from 'src/app/shared/components/notifications/notifications.component';



/* Application wide interceptor for all out going requests */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'JWT '.concat(token)),
            });
            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        public messageService: MessageService,
        private dialogService: ModalService,
        private notificationService: MatSnackBar
    ) { }
    notify(msg, action) {
        this.notificationService.open(msg, action, {duration: 4000});
    }
    notifications(msg) {
        const snackBarRef = this.notificationService.openFromComponent(
            NotificationsComponent, {
                data: msg,
            },
        );
    }
    // errorMessage = '';
    log(message: string) {
        this.messageService.add(message);
    }
    activateModal(message) {
        this.dialogService.openConfirmDialog(message);
    }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                /** Client Side error */
                if (error.error instanceof ErrorEvent) {
                    errorMessage = `Error: ${error.message}`;
                } else {
                    /** Server Side Error */
                    errorMessage = `Error Code: ${error.status},\nMessage: ${error.message}`;
                }
                this.log(error.message);
                return throwError(errorMessage);
            })
        );
    }
}
