import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from 'src/app/layout/main/main.component';
import { MainRoutingModule } from 'src/app/layout/main/main-routing.module';
import { FooterModule } from 'src/app/layout/footer/footer.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SideBarModule } from 'src/app/components/side-bar/side-bar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FooterModule,
    HeaderModule,
    SideBarModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
