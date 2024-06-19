import { NgModule } from '@angular/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgIconComponent } from 'angular-svg-icon';

import { BackButtonComponent } from 'src/app/shared/components/back-button/back-button.component';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [NzToolTipModule, SvgIconComponent],
  exports: [BackButtonComponent],
})
export class BackButtonModule {}
