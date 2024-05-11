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
  COURSE_EDIT = 'COURSE_EDIT',
  PRACTICE_CREATE = 'PRACTICE_CREATE',
  PRACTICE_EDIT = 'PRACTICE_EDIT',
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
  EDIT = 'edit',
}

export const EPartialRoutes: TKeyInEnum<ERoutes, string> = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
  [ERoutes.LOGIN]: [ERoutesParts.LOGIN].join('/'),
  [ERoutes.REGISTRATION]: [ERoutesParts.REGISTRATION].join('/'),
  [ERoutes.COURSES]: [ERoutesParts.COURSES].join('/'),
  [ERoutes.COURSES_ID]: [':' + ERoutesIds.COURSE_ID].join('/'),
  [ERoutes.COURSE_CREATE]: [ERoutesParts.CREATE].join('/'),
  [ERoutes.COURSE_EDIT]: [ERoutesParts.EDIT].join('/'),
  [ERoutes.PRACTICES]: [ERoutesParts.PRACTICES].join('/'),
  [ERoutes.PRACTICES_ID]: [':' + ERoutesIds.PRACTICE_ID].join('/'),
  [ERoutes.PRACTICE_CREATE]: [ERoutesParts.CREATE].join('/'),
  [ERoutes.PRACTICE_EDIT]: [ERoutesParts.CREATE].join('/'),
};

export const EFullRoutes = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
  [ERoutes.LOGIN]: ['/', ERoutesParts.LOGIN],
  [ERoutes.REGISTRATION]: ['/', ERoutesParts.REGISTRATION],
  [ERoutes.COURSES]: ['/', ERoutesParts.MAIN, ERoutesParts.COURSES],
  [ERoutes.PRACTICES]: (courseId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
  ],
  [ERoutes.COURSES_ID]: (courseId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
  ],
  [ERoutes.PRACTICES_ID]: (courseId: string, practiceId: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    practiceId,
  ],
  [ERoutes.COURSE_CREATE]: [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    ERoutesParts.CREATE,
  ],
  [ERoutes.COURSE_EDIT]: (courseId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.EDIT,
  ],
  [ERoutes.PRACTICE_CREATE]: (courseId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    ERoutesParts.CREATE,
  ],
  [ERoutes.PRACTICE_EDIT]: (courseId: string, practiceId: number) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    practiceId,
    ERoutesParts.EDIT,
  ],
};
