export type TCourseCreateDto = {
  name: string;
  image: number | null;
};

export type TCourseUpdateDto = {
  name: string;
  image: number | null;
};

export type TCourseDto = {
  id: number;
  name: string;
  image: number | null;
};
