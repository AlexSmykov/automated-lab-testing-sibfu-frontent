import { NgModule } from '@angular/core'

import { MainComponent } from './main.component'
import { MainRoutingModule } from './main-routing.module'
import { FooterModule } from '../footer/footer.module'
import { HeaderModule } from '../header/header.module'

@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, FooterModule, HeaderModule],
  exports: [MainComponent],
})
export class MainModule {}
