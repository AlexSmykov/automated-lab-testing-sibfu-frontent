import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.module'
import { FooterModule } from '../footer/footer.module'
import { HeaderModule } from '../header/header.module'
import { SideBarModule } from '../../components/side-bar/side-bar.module'

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FooterModule,
    HeaderModule,
    SideBarModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
