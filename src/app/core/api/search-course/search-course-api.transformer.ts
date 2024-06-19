import { API_STATIC_IMAGES } from 'src/app/core/api/api-urls';
import { TSearchedCourseDto } from 'src/app/core/api/search-course/search-course-api.dto';
import { TSearchedCourse } from 'src/app/core/api/search-course/search-course-api.interface';

export function deserializeSearchedCourse(
  dto: TSearchedCourseDto
): TSearchedCourse {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    image: dto.image_id ? API_STATIC_IMAGES + dto.image_id : '',
    participationStatus: dto.participation_status,
  };
}
