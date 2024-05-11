import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

export type TPracticePostDto = {
  name: string;
  description: string;
  deadline: string;
  soft_deadline: string;
  languages: number[];
  memory_limit: number;
  time_limit: number;
  max_threads: number;
  network: boolean;
  allow_multi_file: boolean;
  command_line_args: string;
  testcases: TTestcasePostDto[];
};

export type TPracticeDto = {
  course_id: string;
  author_id: string;
  name: string;
  description: string;
  deadline: string;
  soft_deadline: string;
  languages: TNamedEntity[];
  memory_limit: number;
  time_limit: number;
  max_threads: number;
  network: boolean;
  allow_multi_file: boolean;
  command_line_args: string;
  testcases: TTestcaseDto[];
};

export type TTestcasePostDto = {
  input: string;
  output: string;
  hidden: boolean;
};

export type TTestcaseDto = {
  id: number;
  input: string;
  output: string;
  hidden: boolean;
};