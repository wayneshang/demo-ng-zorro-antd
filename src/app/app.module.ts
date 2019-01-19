import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { routes } from './routes/routes';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SpinComponent } from './spin/spin.component';
import { EditorComponent } from './editor/editor.component';
import { NzFormControlComponent, NzFormDirective, NzInputModule ,NzFormItemComponent} from 'ng-zorro-antd';


export function createTranslateLoader(http: HttpClient) {                 // 加载国际化指令文件解析路径
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    HttpClientModule,
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    UsersComponent,
    FormComponent,
    AvatarComponent,
    SpinComponent,
    EditorComponent
  ],
  providers: [TranslateService], // 根模块引入服务TranslateService
  bootstrap: [AppComponent]
})
export class AppModule {}
