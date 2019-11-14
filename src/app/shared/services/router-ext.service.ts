import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

/** A router wrapper, adding extra functions. */
@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class RouterExtService {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}
