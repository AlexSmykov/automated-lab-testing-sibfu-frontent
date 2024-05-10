import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextareaInputModule } from 'src/app/shared/components/forms/textarea-input/textarea-input.module';
import { PracticePageComponent } from 'src/app/pages/practice-page/practice-page.component';
import { PracticePageRoutingModule } from 'src/app/pages/practice-page/practice-page-routing.module';
import { IslandModule } from 'src/app/shared/components/island/island.module';
import { FormButtonModule } from 'src/app/shared/components/button/form-button.module';

@NgModule({
  declarations: [PracticePageComponent],
  imports: [
    CommonModule,
    IslandModule,
    PracticePageRoutingModule,
    FormButtonModule,
    TextareaInputModule,
  ],
  exports: [PracticePageComponent],
})
export class PracticePageModule {}
