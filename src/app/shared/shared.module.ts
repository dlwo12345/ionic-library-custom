import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {IonicModule} from '@ionic/angular';
import {LoadingService} from './services/loading.service';
import {DeactivateGuardService} from './services/deactivate-guard.service';
import {SharedPipe} from './pipes/shared.pipe';
import {MaterialModule} from './modules/material/material.module';
import {PrimengModule} from './modules/primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    MaterialModule,
    PrimengModule
  ],
  declarations: [SharedPipe],
  providers: [
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    LoadingService,
    DeactivateGuardService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    SharedPipe,
    MaterialModule,
    PrimengModule
  ]
})
export class SharedModule {}
