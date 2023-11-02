import { NgModule } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzImageModule } from 'ng-zorro-antd/experimental/image'
import { NgOptimizedImage } from '@angular/common'

import { PageLayoutComponent } from './page-layout.component'
import { LogoModule } from '../../components/logo/logo.module'
import { SideBarModule } from '../../components/side-bar/side-bar.module'

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [
    NzIconModule,
    NzImageModule,
    NgOptimizedImage,
    LogoModule,
    SideBarModule,
  ],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
