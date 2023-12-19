import { TestBed } from '@angular/core/testing'

import { RouteControllerService } from './route-controller.service'

describe('RouteControllerService', () => {
  let service: RouteControllerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(RouteControllerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
