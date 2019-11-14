import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Injectable({
  providedIn: 'root' // 모든 페이지에서 공통으로 사용하기위해 provide root로 설정
})
export class GaService {
  constructor(private router: Router) {}

  /**
   * ga 추적 세팅
   */
  setGa() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).ga('set', 'page', event.urlAfterRedirects);
        (window as any).ga('send', 'pageview');
      }
    });
  }
}
