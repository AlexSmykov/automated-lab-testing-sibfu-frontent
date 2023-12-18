import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AsyncPipe, NgForOf } from '@angular/common'

import { HomePageComponent } from './home-page.component'
import { HomePageRoutingModule } from './home-page-routing.module'
import { FormContainerModule } from '../../shared/components/form-container/form-container.module'
import { RouterLinkModule } from '../../shared/components/router-link/router-link.module'
import { IslandModule } from '../../shared/components/island/island.module'
import { PageLayoutModule } from '../../layout/page-layout/page-layout.module'
import { SideBarModule } from '../../components/side-bar/side-bar.module'
import { CourseItemModule } from './components/course-item/course-item.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    HomePageRoutingModule,
    RouterLinkModule,
    FormContainerModule,
    ReactiveFormsModule,
    IslandModule,
    PageLayoutModule,
    SideBarModule,
    AsyncPipe,
    CourseItemModule,
    NgForOf,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
