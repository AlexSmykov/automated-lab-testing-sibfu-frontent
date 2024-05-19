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
  return {
    name: data.name,
    description: data.description,
    image_id: data.imageId,
  };
}

export function serializeCourseUpdate(data: TCourseUpdate): TCourseUpdateDto {
  return {
    name: data.name,
    description: data.description,
    image_id: data.imageId,
  };
}

export function deserializeCourse(dto: TCourseDto): TCourse {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    image: dto.image_id ? API_STATIC_IMAGES + dto.image_id : '',
    imageId: dto.image_id,
  };
}
