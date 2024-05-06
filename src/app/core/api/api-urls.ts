import { environment } from 'src/environments/environment';

const API = environment.baseUrl;

const V1 = '/v1';

const API_V1 = API + V1;

const IMAGE = '/image';
const COURSE = '/course';
const REGISTRATION = '/registration';

// Регистрация / логин
export const API_REGISTRATIONS = API_V1 + REGISTRATION;

// Курс

export const API_COURSE = API_V1 + COURSE;
export const API_COURSE_ID = (id: number) => API_COURSE + '/' + id;

// Utils
export const API_IMAGE = API_V1 + IMAGE;
