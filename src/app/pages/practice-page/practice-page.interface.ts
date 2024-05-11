import { EPracticeStatus } from 'src/app/shared/interfaces/practice-status.interface';

export type TPractice = {
  id: string;
  status: EPracticeStatus;
  name: string;
  description: string;
  examples: TPracticeExample[];
  tests?: TTest[];
};

export type TTest = {
  id: number;
  inputData: string;
  outputData: string;
};

export type TPracticeExample = {
  id: number;
  inputData: string;
  outputData: string;
};
