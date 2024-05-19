import { environment } from 'src/environments/environment';

const API = environment.baseUrl;

const V1 = '/v1';

const API_V1 = API + V1;

const IMAGE = '/image';
const IMAGES = '/images';
const STATIC = '/static';
const COURSE = '/course';
const PRACTICE = '/practice';
const LANGUAGE = '/language';
const REGISTRATION = '/registration';

// Регистрация / логин
export const API_REGISTRATIONS = API_V1 + REGISTRATION;

// Курс
export const API_COURSE = API_V1 + COURSE + '/';
export const API_COURSE_ID = (id: string) => API_COURSE + id;
export const API_COURSE_SEARCH = API_COURSE;

// Практическая работа
export const API_COURSE_ID_PRACTICE = (id: string) =>
  API_COURSE_ID(id) + PRACTICE;
export const API_PRACTICE = API_V1 + PRACTICE;
export const API_PRACTICE_ID = (id: string) => API_PRACTICE + '/' + id;

// Словари
export const API_LANGUAGES = API_V1 + LANGUAGE;

// Utils
export const API_IMAGE = API_V1 + IMAGE + '/';
export const API_STATIC_IMAGES = API_V1 + STATIC + IMAGES + '/';
