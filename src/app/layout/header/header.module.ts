import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzImageModule } from 'ng-zorro-antd/experimental/image'
import { NgOptimizedImage } from '@angular/common'

import { HeaderComponent } from './header.component'

@NgModule({
  declarations: [HeaderComponent],
  imports: [NzIconModule, NzImageModule, NgOptimizedImage],
  exports: [HeaderComponent],
})
export class HeaderModule {}
