import { TKeyInEnum } from './interfaces/key-in-enum.interface'

enum ERoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  COURSES = 'COURSES',
  COURSES_ID = 'COURSES_ID',
  PRACTICE = 'PRACTICE',
}

enum ERoutesParts {
  ID = ':id',
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  COURSES = 'courses',
  PRACTICE = 'practice',
}

export const EPartialRoutes: TKeyInEnum<ERoutes, string> = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.COURSES]: [ERoutesParts.COURSES].join('/'),
  [ERoutes.COURSES_ID]: [ERoutesParts.COURSES, ERoutesParts.ID].join('/'),
  [ERoutes.PRACTICE]: [
    ERoutesParts.COURSES,
    ERoutesParts.PRACTICE,
    ERoutesParts.ID,
  ].join('/'),
}

export const EFullRoutes: TKeyInEnum<ERoutes, any> = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
  [ERoutes.LOGIN]: ['/', ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: ['/', ERoutesParts.REGISTRATION],
  [ERoutes.COURSES]: ['/', ERoutesParts.MAIN, ERoutesParts.COURSES],
  [ERoutes.COURSES_ID]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    id,
  ],
  [ERoutes.PRACTICE]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    ERoutesParts.PRACTICE,
    id,
  ],
}
