import {
  TCourse,
  TCoursePost,
  TCourseUpdate,
} from 'src/app/core/api/course/course-api.interface';
import {
  TCourseCreateDto,
  TCourseDto,
  TCourseUpdateDto,
} from 'src/app/core/api/course/course-api.dto';
import { API_STATIC_IMAGES } from 'src/app/core/api/api-urls';

export function serializeCoursePost(data: TCoursePost): TCourseCreateDto {
  return data;
}

export function serializeCourseUpdate(data: TCourseUpdate): TCourseUpdateDto {
  return data;
}

export function deserializeCourse(dto: TCourseDto): TCourse {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    image: dto.image_id ? API_STATIC_IMAGES + dto.image_id : '',
  };
}
