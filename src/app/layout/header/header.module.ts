import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzImageModule } from 'ng-zorro-antd/experimental/image'

import { HeaderComponent } from './header.component'
import { LogoModule } from '../../components/logo/logo.module'

@NgModule({
  declarations: [HeaderComponent],
  imports: [NzIconModule, NzImageModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
