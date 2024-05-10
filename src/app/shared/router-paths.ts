import { TKeyInEnum } from 'src/app/shared/interfaces/key-in-enum.interface';

enum ERoutes {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  COURSES = 'COURSES',
  COURSES_ID = 'COURSES_ID',
  PRACTICES = 'PRACTICES',
  PRACTICES_ID = 'PRACTICES_ID',
  COURSE_CREATE = 'COURSE_CREATE',
  PRACTICE_CREATE = 'PRACTICE_CREATE',
}

export enum ERoutesIds {
  COURSE_ID = 'courseId',
  PRACTICE_ID = 'practiceId',
}

enum ERoutesParts {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  COURSES = 'courses',
  PRACTICES = 'practices',
  CREATE = 'create',
}

export const EPartialRoutes: TKeyInEnum<ERoutes, string> = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.COURSES]: [ERoutesParts.COURSES].join('/'),
  [ERoutes.COURSES_ID]: [':' + ERoutesIds.COURSE_ID].join('/'),
  [ERoutes.COURSE_CREATE]: [ERoutesParts.CREATE].join('/'),
  [ERoutes.PRACTICES]: [ERoutesParts.PRACTICES].join('/'),
  [ERoutes.PRACTICES_ID]: [':' + ERoutesIds.PRACTICE_ID].join('/'),
  [ERoutes.PRACTICE_CREATE]: [ERoutesParts.CREATE].join('/'),
};

export const EFullRoutes = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
  [ERoutes.LOGIN]: ['/', ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: ['/', ERoutesParts.REGISTRATION],
  [ERoutes.COURSES]: ['/', ERoutesParts.MAIN, ERoutesParts.COURSES],
  [ERoutes.PRACTICES]: (courseId: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
  ],
  [ERoutes.COURSES_ID]: (id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    id,
  ],
  [ERoutes.PRACTICES_ID]: (courseId: number, id: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    id,
  ],
  [ERoutes.COURSE_CREATE]: [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    ERoutesParts.CREATE,
  ],
  [ERoutes.PRACTICE_CREATE]: (courseId: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    ERoutesParts.CREATE,
  ],
};
