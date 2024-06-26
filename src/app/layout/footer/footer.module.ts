import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

import { FooterComponent } from 'src/app/layout/footer/footer.component';

registerLocaleData(ru);

@NgModule({
  declarations: [FooterComponent],
  imports: [],
  exports: [FooterComponent],
})
export class FooterModule {}
