import { NgModule } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SvgIconComponent } from 'angular-svg-icon';

import { ImageInputComponent } from 'src/app/shared/components/forms/image-input/image-input.component';
import { IslandModule } from 'src/app/shared/components/island/island.module';

@NgModule({
  declarations: [ImageInputComponent],
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzGridModule,
    CommonModule,
    NzCheckboxModule,
    IslandModule,
    NzUploadModule,
    SvgIconComponent,
  ],
  exports: [ImageInputComponent],
})
export class ImageInputModule {}
