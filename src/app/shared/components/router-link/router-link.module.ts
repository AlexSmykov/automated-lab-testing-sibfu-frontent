import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RouterLinkComponent } from 'src/app/shared/components/router-link/router-link.component';

@NgModule({
  declarations: [RouterLinkComponent],
  imports: [RouterLink],
  exports: [RouterLinkComponent],
})
export class RouterLinkModule {}
