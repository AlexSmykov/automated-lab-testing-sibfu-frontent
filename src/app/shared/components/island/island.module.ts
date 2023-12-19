import { NgModule } from '@angular/core'
import { NzInputModule } from 'ng-zorro-antd/input'

import { IslandComponent } from './island.component'

@NgModule({
  declarations: [IslandComponent],
  imports: [NzInputModule],
  exports: [IslandComponent],
})
export class IslandModule {}
