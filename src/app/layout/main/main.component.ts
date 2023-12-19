import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

import { filter } from 'rxjs'

import { EFullRoutes } from '../../shared/router-paths'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isShowSideBar = true
  withoutSideBarPages: string[] = ['/' + EFullRoutes.COURSES.slice(1).join('/')]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkPath(this.router.url)
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((events) => {
        this.checkPath(events.urlAfterRedirects)
      })
  }

  private checkPath(url: string): void {
    console.log(url)
    console.log(this.withoutSideBarPages)
    if (this.withoutSideBarPages.includes(url)) {
      this.isShowSideBar = false
      return
    }
    this.isShowSideBar = true
  }
}
