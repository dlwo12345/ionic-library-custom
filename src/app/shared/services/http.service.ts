import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * get
   * get api 호출
   * @param url 전송될 api
   * @param params queryParams
   */
  public get(url: string, params?: any, type?: any): Observable<any> {
    const Param = {
      params: new HttpParams({fromObject: params})
    };
    if (type) {
      const typeKey = Object.keys(type)[0];
      Param[typeKey] = type[typeKey];
    }

    return this.http.get(url, Param).pipe(
      tap(_ => {
        console.warn(
          `Method: get, Call API: ${url}\nParams: ${JSON.stringify(params)}`
        );
      }),
      catchError(this.handleError)
    );
  }

  /**
   * post
   * post api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public post(url: string, params?: any): Observable<any> {
    return this.http.post(url, params).pipe(
      tap(_ => {
        console.warn(
          `Method: POST, Call API: ${url}\nParams: ${JSON.stringify(params)}`
        );
      }),
      catchError(this.handleError)
    );
  }

  /**
   * put
   * put api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public put(url: string, params?: any): Observable<any> {
    return this.http.put(url, params).pipe(
      tap(_ => {
        console.warn(
          `Method: PUT, Call API: ${url}\nParams: ${JSON.stringify(params)}`
        );
      }),
      catchError(this.handleError)
    );
  }

  /**
   * patch
   * patch api 호출
   * @param url 전송될 api
   * @param params 전송될 params
   */
  public patch(url: string, params?: any): Observable<any> {
    return this.http.patch(url, params).pipe(
      tap(_ => {
        console.warn(
          `Method: PATCH, Call API: ${url}\nParams: ${JSON.stringify(params)}`
        );
      }),
      catchError(this.handleError)
    );
  }

  /**
   * delete
   * delete api 호출
   * @param url 전송될 api
   * @param params queryParams
   */
  public delete(url: string, params?: any): Observable<any> {
    return this.http
      .delete(url, {
        params: new HttpParams({fromObject: params})
      })
      .pipe(
        tap(_ => {
          console.warn(
            `Method: delete, Call API: ${url}\nParams: ${JSON.stringify(
              params
            )}`
          );
        }),
        catchError(this.handleError)
      );
  }

  /**
   * handleError
   * 에러 로그
   * @param error 에러메시지
   */
  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('An error occurred', error);
    return observableThrowError(error || 'Server error');
  }
}
