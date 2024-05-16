import { FormArray } from '@angular/forms';

import { TFormGroupValue } from 'src/app/shared/interfaces/mapped-types.interface';

export type TPracticeFormValue = {
  name: string;
  description: string;
  isDeadline: boolean;
  deadline: Date;
  isSoftDeadline: boolean;
  softDeadline: Date;
  languages: number[];
  memoryLimit: number;
  timeLimit: number;
  maxThreads: number;
  isNetworkAvailable: boolean;
  isMultiFileAvailable: boolean;
  commandLineArgs: string;
  testcases: FormArray<TFormGroupValue<TPracticeFormTestcase>>;
};

export type TPracticeFormTestcase = {
  input: string;
  output: string;
  hidden: boolean;
};

export type TPracticeFormValueRaw = {
  name: string;
  description: string;
  isDeadline: boolean;
  deadline: Date;
  isSoftDeadline: boolean;
  softDeadline: Date;
  languages: number[];
  memoryLimit: number;
  timeLimit: number;
  maxThreads: number;
  isNetworkAvailable: boolean;
  isMultiFileAvailable: boolean;
  commandLineArgs: string;
  testcases: TPracticeFormTestcase[];
};
