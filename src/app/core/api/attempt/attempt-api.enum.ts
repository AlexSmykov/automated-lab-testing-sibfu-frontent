export enum EAttemptStatuses {
  IN_QUEUE = 'IN_QUEUE',
  ACCEPTED = 'ACCEPTED',
  TIME_LIMIT_EXCEED = 'TIME_LIMIT_EXCEED',
  MEMORY_LIMIT_EXCEED = 'MEMORY_LIMIT_EXCEED',
  WRONG_ANSWER = 'WRONG_ANSWER',
  SERVICE_ERROR = 'SERVICE_ERROR',
  COMPILATION_ERROR = 'COMPILATION_ERROR',
}

export const EAttemptStatusesText: Record<EAttemptStatuses, string> = {
  IN_QUEUE: 'В обработке',
  ACCEPTED: 'Принято',
  TIME_LIMIT_EXCEED: 'Превышение времени выполнение',
  MEMORY_LIMIT_EXCEED: 'Превышение по памяти',
  WRONG_ANSWER: 'Неправильный ответ',
  SERVICE_ERROR: 'Техническая ошибка сервиса',
  COMPILATION_ERROR: 'Ошибка компиляции',
};
