enum ERoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  COURSES = 'COURSES',
  COURSE_ITEM = 'COURSE_ITEM',
}

enum ERoutesParts {
  ID = ':id',
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  COURSES = 'courses',
  COURSE = 'course',
}

export const EPartialRoutes: { [key in ERoutes]: string } = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.COURSES]: [ERoutesParts.COURSES].join('/'),
  [ERoutes.COURSE_ITEM]: [ERoutesParts.COURSE, ERoutesParts.ID].join('/'),
}

export const EFullRoutes: { [key in ERoutes]: any } = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
  [ERoutes.LOGIN]: ['/', ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: ['/', ERoutesParts.REGISTRATION],
  [ERoutes.COURSES]: ['/', ERoutesParts.MAIN, ERoutesParts.COURSES],
  [ERoutes.COURSE_ITEM]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSE,
    id,
  ],
}
