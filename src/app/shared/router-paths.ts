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
  PRACTICE_SUMMARY = 'PRACTICE_SUMMARY',
  COURSE_SEARCH = 'COURSE_SEARCH',
  COURSE_PARTICIPATION = 'COURSE_PARTICIPATION',
  SERVER_ERROR = 'SERVER_ERROR',
  NOT_FOUND = 'NOT_FOUND',
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
  SUMMARY = 'summary',
  SEARCH = 'search',
  PARTICIPATIONS = 'participations',
  SERVER_ERROR = 'server-error-500',
  NOT_FOUND = 'not-found-404',
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
  [ERoutes.PRACTICE_EDIT]: [ERoutesParts.EDIT].join('/'),
  [ERoutes.PRACTICE_SUMMARY]: [ERoutesParts.SUMMARY].join('/'),
  [ERoutes.COURSE_SEARCH]: [ERoutesParts.SEARCH].join('/'),
  [ERoutes.COURSE_PARTICIPATION]: [ERoutesParts.PARTICIPATIONS].join('/'),
  [ERoutes.SERVER_ERROR]: [ERoutesParts.SERVER_ERROR].join('/'),
  [ERoutes.NOT_FOUND]: [ERoutesParts.NOT_FOUND].join('/'),
};

export const EFullRoutes: TKeyInEnum<ERoutes, any> = {
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
  [ERoutes.PRACTICES_ID]: (courseId: string, practiceId: string) => [
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
  [ERoutes.PRACTICE_EDIT]: (courseId: string, practiceId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    practiceId,
    ERoutesParts.EDIT,
  ],
  [ERoutes.PRACTICE_SUMMARY]: (courseId: string, practiceId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PRACTICES,
    practiceId,
    ERoutesParts.SUMMARY,
  ],
  [ERoutes.COURSE_SEARCH]: [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    ERoutesParts.SEARCH,
  ],
  [ERoutes.COURSE_PARTICIPATION]: (courseId: string) => [
    '/',
    ERoutesParts.MAIN,
    ERoutesParts.COURSES,
    courseId,
    ERoutesParts.PARTICIPATIONS,
  ],
  [ERoutes.SERVER_ERROR]: ['/', ERoutesParts.SERVER_ERROR],
  [ERoutes.NOT_FOUND]: ['/', ERoutesParts.NOT_FOUND],
};
