import {Injectable, ErrorHandler} from '@angular/core';

/**
 * 빌드 후 이전 chunk 에러 대응을 위한 ErrorHandler
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;

    if (chunkFailedMessage.test(error.message)) {
      // tslint:disable-next-line: deprecation
      window.location.reload();
    }
  }
}
