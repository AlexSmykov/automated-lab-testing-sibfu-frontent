import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';

import { HeaderComponent } from 'src/app/layout/header/header.component';
import { LogoModule } from 'src/app/components/logo/logo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [NzIconModule, NzImageModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
