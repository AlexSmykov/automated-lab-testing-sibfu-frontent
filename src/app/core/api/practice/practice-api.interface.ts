import { TNamedEntity } from 'src/app/shared/interfaces/named-entity';

export type TPractice = {
  id: string;
  courseId: string;
  authorId: string;
  name: string;
  description: string;
  deadline: Date;
  softDeadline: Date;
  languages: TNamedEntity[];
  memoryLimit: number;
  timeLimit: number;
  maxThreads: number;
  network: boolean;
  allowMultiFile: boolean;
  commandLineArgs: string;
  testcases: TTestcase[];
};

export type TTestcase = {
  id: number;
  input: string;
  output: string;
  hidden: boolean;
};

export type TPracticeFilters = {};
