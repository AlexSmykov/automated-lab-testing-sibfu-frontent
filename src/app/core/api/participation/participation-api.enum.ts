export enum EParticipationStatuses {
  APPROVE = 'approve',
  REMOVE = 'remove',
}

export enum EParticipationFilterStatuses {
  REQUEST = 'request',
  PARTICIPANT = 'participant',
}

export const EParticipationFilterDescription: Record<
  EParticipationFilterStatuses,
  string
> = {
  [EParticipationFilterStatuses.REQUEST]: 'Новые заявки',
  [EParticipationFilterStatuses.PARTICIPANT]: 'Студенты на курсе',
};
