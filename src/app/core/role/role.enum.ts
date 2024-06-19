export enum ERoles {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  GUEST = 'GUEST',
}

export const ERolesText: Record<ERoles, string> = {
  [ERoles.STUDENT]: 'Студент',
  [ERoles.TEACHER]: 'Преподаватель',
  [ERoles.GUEST]: 'Гость',
};
