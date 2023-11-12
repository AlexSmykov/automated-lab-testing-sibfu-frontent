enum ERoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  HOME_PAGE = 'HOME_PAGE',
  COURSE_ITEM = 'COURSE_ITEM',
}

enum ERoutesParts {
  ID = ':id',
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  HOME_PAGE = 'home-page',
  COURSE = 'course',
}

export const EPartialRoutes: { [key in ERoutes]: string } = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.HOME_PAGE]: [ERoutesParts.HOME_PAGE].join('/'),
  [ERoutes.COURSE_ITEM]: [ERoutesParts.COURSE, ERoutesParts.ID].join('/'),
}

export const EFullRoutes: { [key in ERoutes]: any } = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN],
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION],
  [ERoutes.HOME_PAGE]: [ERoutesParts.HOME_PAGE],
  [ERoutes.COURSE_ITEM]: (id: number) => [ERoutesParts.COURSE, id],
}
