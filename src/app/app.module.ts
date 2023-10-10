import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import ru from '@angular/common/locales/ru'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterOutlet } from '@angular/router'

import { AppComponent } from './app.component'
import { FooterModule } from './layout/footer/footer.module'
import { HeaderModule } from './layout/header/header.module'
import { AppRoutingModule } from './app-routing.module'

registerLocaleData(ru)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
