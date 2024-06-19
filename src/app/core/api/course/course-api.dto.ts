export type TCourseCreateDto = {
  name: string;
  description: string;
  image_id?: string;
};

export type TCourseUpdateDto = {
  name: string;
  description: string;
  image_id: string;
};

export type TCourseDto = {
  id: string;
  name: string;
  description: string;
  image_id: string;
};
