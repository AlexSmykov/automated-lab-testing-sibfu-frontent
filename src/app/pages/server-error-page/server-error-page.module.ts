import { NgModule } from '@angular/core';

import { ServerErrorPageComponent } from 'src/app/pages/server-error-page/server-error-page.component';
import { ServerErrorPageRoutingModule } from 'src/app/pages/server-error-page/server-error-page-routing.module';

@NgModule({
  declarations: [ServerErrorPageComponent],
  imports: [ServerErrorPageRoutingModule],
  exports: [ServerErrorPageComponent],
})
export class ServerErrorPageModule {}
