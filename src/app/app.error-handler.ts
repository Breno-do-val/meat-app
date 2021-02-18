import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    
    constructor(
        private readonly injector: Injector,
        private readonly ns: NotificationService,
        private readonly zone: NgZone
    ) { 
        super()
    }

    handleError(errorResponse: Response | any) {
        const loginService = this.injector.get(LoginService);

        if (errorResponse instanceof HttpErrorResponse) {
            const message = errorResponse.error.message;
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 401:
                        loginService.handleLogin();
                        break;
                    case 403:
                        this.ns.notify(message || 'Não Autorizado');
                        break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado');
                        break;
                }
            })
        }
    }
}