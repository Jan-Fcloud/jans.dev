import { ErrorHandler, Injectable, Injector } from "@angular/core";

import { NotificationService } from "./services/notifications/notification.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {}

    handleError(error: Error){

    }
}