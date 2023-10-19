import { NgModule } from '@angular/core'
import { RouterLink } from '@angular/router'

import { RouterLinkComponent } from './router-link.component'

@NgModule({
  declarations: [RouterLinkComponent],
  imports: [RouterLink],
  exports: [RouterLinkComponent],
})
export class RouterLinkModule {}
