import { ECourseParticipationStatuses } from 'src/app/core/api/search-course/search-course-api.enum';

export type TSearchedCourseDto = {
  id: string;
  name: string;
  description: string;
  image_id: string;
  participation_status: ECourseParticipationStatuses;
};
