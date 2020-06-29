import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.log('passei pelo handler', error);
    throw error;
  }
}
