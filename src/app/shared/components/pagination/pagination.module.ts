import { NgModule } from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AsyncPipe, CommonModule } from '@angular/common';

import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, NzPaginationModule, AsyncPipe],
  exports: [PaginationComponent],
})
export class PaginationModule {}
