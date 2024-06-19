import { ECourseParticipationStatuses } from 'src/app/core/api/search-course/search-course-api.enum';

export type TSearchedCourse = {
  id: string;
  name: string;
  description: string;
  image: string;
  participationStatus: ECourseParticipationStatuses;
};
