import { EPracticeStatus } from '../../shared/interfaces/practice-status.interface';

export type TPractice = {
  id: number;
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
