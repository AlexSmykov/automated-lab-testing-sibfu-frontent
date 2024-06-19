import { environment } from 'src/environments/environment';

const API = environment.baseUrl;

const V1 = '/v1';

const API_V1 = API + V1;

const ME = '/me';
const USER = '/user';
const IMAGE = '/image';
const IMAGES = '/images';
const STATIC = '/static';
const COURSE = '/course';
const SEARCH = '/search';
const SUMMARY = '/summary';
const ATTEMPT = '/attempt';
const PRACTICE = '/practice';
const LANGUAGE = '/language';
const REGISTRATION = '/registration';
const PARTICIPATION = '/participation';
const AUTHENTICATION = '/authentication';
const PARTICIPATION_UPDATE = '/participation_update';

// Регистрация / логин
export const API_REGISTRATION = API_V1 + REGISTRATION;
export const API_LOGIN = API_V1 + AUTHENTICATION;
export const API_USER = API_V1 + USER;
export const API_USER_ME = API_USER + ME;

// Курс
export const API_COURSE = API_V1 + COURSE + '/';
export const API_COURSE_ID = (id: string) => API_COURSE + id;
export const API_COURSE_SEARCH = API_COURSE + SEARCH;

// Практическая работа
export const API_COURSE_ID_PRACTICE = (id: string) =>
  API_COURSE_ID(id) + PRACTICE;
export const API_PRACTICE = API_V1 + PRACTICE;
export const API_PRACTICE_ID = (id: string) => API_PRACTICE + '/' + id;
export const API_PRACTICE_ID_ATTEMPT = (id: string) =>
  API_PRACTICE_ID(id) + ATTEMPT;
export const API_PRACTICE_ID_SUMMARY = (id: string) =>
  API_PRACTICE_ID(id) + SUMMARY;

// Заявки на курс
export const API_COURSE_ID_SEND_PARTICIPATION = (id: string) =>
  API_COURSE_ID(id) + PARTICIPATION;
export const API_COURSE_ID_SEND_PARTICIPATION_UPDATE = (id: string) =>
  API_COURSE_ID(id) + PARTICIPATION_UPDATE;

// Словари
export const API_LANGUAGES = API_V1 + LANGUAGE;

// Utils
export const API_IMAGE = API_V1 + IMAGE + '/';
export const API_STATIC_IMAGES = API_V1 + STATIC + IMAGES + '/';
