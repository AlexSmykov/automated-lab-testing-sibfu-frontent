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

export function serializeCoursePost(data: TCoursePost): TCourseCreateDto {
  return data;
}

export function serializeCourseUpdate(data: TCourseUpdate): TCourseUpdateDto {
  return data;
}

export function deserializeCourse(dto: TCourseDto): TCourse {
  return dto;
}
