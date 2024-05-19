import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgStyle } from '@angular/common';

import { IslandComponent } from 'src/app/shared/components/island/island.component';

@NgModule({
  declarations: [IslandComponent],
  imports: [NzInputModule, NgStyle],
  exports: [IslandComponent],
})
export class IslandModule {}
