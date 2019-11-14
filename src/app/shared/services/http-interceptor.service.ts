import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from './loading.service';
import {AlertController} from '@ionic/angular';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(
    private loaderS: LoadingService,
    private alertC: AlertController
  ) {}

  /**
   * api 요청이 전부 완료 되어 있는지 판단하고 전부 완료되었을때만 loading 종료
   */
  removeRequest(request: HttpRequest<any>) {
    const i = this.requests.indexOf(request);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.requests.length > 0 ? this.loaderS.show() : this.loaderS.hide();
  }

  /**
   * 로딩처리, http 통신 실패시 alert 처리 등...
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const exceptionApi = [
      'nickNmChk.json',
    ]; // 예외 api
    const exceptionCheck = !exceptionApi.some(
      item => request.url.indexOf(item) > 0
    ); // 예외 api일때는 체크 안함

    // 예외 api가 아닐때만 로딩띄움
    if (exceptionCheck) {
      this.loaderS.show(); // 로딩 시작
    }

    return Observable.create(observer => {
      const subscription = next.handle(request).subscribe(
        event => {
          if (event instanceof HttpResponse) {
            if (exceptionCheck && event.body.errors) {
              this.alertC
                .create({
                  header: '알림',
                  message: event.body.message || 'error',
                  buttons: ['OK']
                })
                .then(res => res.present());
              return;
            }
            this.removeRequest(request);
            observer.next(event);
          }
        },
        err => {
          if (err instanceof HttpErrorResponse && err.status !== 500) {
            this.alertC
              .create({
                header: '알림',
                message: err.message || 'error',
                buttons: ['OK']
              })
              .then(res => res.present());
            this.removeRequest(request);
          }

          observer.error(err);
        },
        () => {
          this.removeRequest(request);
          observer.complete();
        }
      );
      return () => {
        this.removeRequest(request);
        subscription.unsubscribe();
      };
    });
  }
}
