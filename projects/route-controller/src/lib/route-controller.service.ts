import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root',
})
export class RouteControllerService {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  goBack(alternativePath?: string[]): void {
    if (!!this.router.getCurrentNavigation()?.previousNavigation) {
      this.location.back()
    } else if (alternativePath) {
      this.router.navigate(alternativePath)
    }
    this.router.navigate(['/'])
  }
}
