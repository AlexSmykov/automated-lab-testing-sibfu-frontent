import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideQuillConfig, QuillModule } from 'ngx-quill';

import { BasicAuthInterceptor } from 'src/app/core/intercepters/basic-auth.interceptor';
import { AppComponent } from 'src/app/app.component';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [[{ color: [] }, { background: [] }]],
      },
    }),
    AngularSvgIconModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  providers: [
    provideQuillConfig({
      customOptions: [
        {
          import: 'formats/font',
          whitelist: [
            'mirza',
            'roboto',
            'aref',
            'serif',
            'sansserif',
            'monospace',
          ],
        },
      ],
    }),
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
