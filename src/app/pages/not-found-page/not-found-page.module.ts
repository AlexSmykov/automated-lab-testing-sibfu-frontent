import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from 'src/app/pages/not-found-page/not-found-page.component';
import { NotFoundPageRoutingModule } from 'src/app/pages/not-found-page/not-found-page-routing.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [NotFoundPageRoutingModule],
  exports: [NotFoundPageComponent],
})
export class NotFoundPageModule {}
