enum ERoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  COURSES = 'COURSES',
  COURSE = 'COURSE',
  PRACTICE = 'PRACTICE',
}

enum ERoutesParts {
  ID = ':id',
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  COURSES = 'courses',
  COURSE = 'course',
  PRACTICE = 'practice',
}

export const EPartialRoutes: { [key in ERoutes]: string } = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.COURSES]: [ERoutesParts.COURSES].join('/'),
  [ERoutes.COURSE]: [ERoutesParts.COURSE, ERoutesParts.ID].join('/'),
  [ERoutes.PRACTICE]: [
    ERoutesParts.COURSE,
    ERoutesParts.PRACTICE,
    ERoutesParts.ID,
  ].join('/'),
}

export const EFullRoutes: { [key in ERoutes]: any } = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
  [ERoutes.LOGIN]: ['/', ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: ['/', ERoutesParts.REGISTRATION],
  [ERoutes.COURSES]: ['/', ERoutesParts.MAIN, ERoutesParts.COURSES],
  [ERoutes.COURSE]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSE,
    id,
  ],
  [ERoutes.PRACTICE]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSE,
    ERoutesParts.PRACTICE,
    id,
  ],
}
