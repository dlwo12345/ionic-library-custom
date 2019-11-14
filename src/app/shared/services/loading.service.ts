import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class LoadingService {
  isLoading = false;

  constructor(private loadingC: LoadingController) {}

  async show() {
    this.isLoading = true;
    return await this.loadingC
      .create({
        cssClass: 'custom-loading',
        translucent: true,
        showBackdrop: true,
        spinner: 'dots',
        mode: 'md'
      })
      .then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => {
              // console.log('abort presenting');
            });
          }
        });
      });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingC
      .dismiss()
      .then(() => {
        // console.log('dismissed');
      })
      .catch(err => {});
  }
}
