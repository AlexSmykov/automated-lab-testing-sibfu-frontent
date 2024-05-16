import {
  TPracticeDto,
  TPracticePostDto,
  TPracticeUpdateDto,
  TTestcaseDto,
  TTestcasePostDto,
  TTestcaseUpdateDto,
} from 'src/app/core/api/practice/practice-api.dto';
import {
  TPractice,
  TTestcase,
} from 'src/app/core/api/practice/practice-api.interface';
import {
  TPracticeFormTestcase,
  TPracticeFormValueRaw,
} from 'src/app/pages/practice-form-page/practice-form-page.interface';

function deserializePracticeTests(data: TTestcaseDto): TTestcase {
  return {
    id: data.id,
    input: data.input,
    output: data.excepted,
    hidden: data.hidden,
  };
}

function serializePracticeTests(
  data: TPracticeFormTestcase
): TTestcasePostDto | TTestcaseUpdateDto {
  return {
    input: data.input,
    excepted: data.output,
    hidden: data.hidden,
  };
}

export function serializePracticePost(
  data: TPracticeFormValueRaw
): TPracticePostDto {
  return {
    name: data.name,
    description: data.description,
    deadline: data.deadline.toISOString(),
    soft_deadline: data.softDeadline.toISOString(),
    languages: data.languages,
    memory_limit: data.memoryLimit,
    time_limit: data.timeLimit,
    max_threads: data.maxThreads,
    network: data.isNetworkAvailable,
    allow_multi_file: data.isMultiFileAvailable,
    command_line_args: data.commandLineArgs,
    testcases: data.testcases.map(serializePracticeTests),
  };
}

export function serializePracticeUpdate(
  data: TPracticeFormValueRaw
): TPracticeUpdateDto {
  return {
    name: data.name,
    description: data.description,
    deadline: data.deadline.toISOString(),
    soft_deadline: data.softDeadline.toISOString(),
    languages: data.languages,
    memory_limit: data.memoryLimit,
    time_limit: data.timeLimit,
    max_threads: data.maxThreads,
    network: data.isNetworkAvailable,
    allow_multi_file: data.isMultiFileAvailable,
    command_line_args: data.commandLineArgs,
    testcases: data.testcases.map(serializePracticeTests),
  };
}

export function deserializePractice(dto: TPracticeDto): TPractice {
  return {
    id: dto.id,
    courseId: dto.course_id,
    authorId: dto.author_id,
    name: dto.name,
    description: dto.description,
    deadline: new Date(dto.deadline),
    softDeadline: new Date(dto.soft_deadline),
    languages: dto.languages,
    memoryLimit: dto.memory_limit,
    timeLimit: dto.time_limit,
    maxThreads: dto.max_threads,
    network: dto.network,
    allowMultiFile: dto.allow_multi_file,
    commandLineArgs: dto.command_line_args,
    testcases: dto.testcases?.map(deserializePracticeTests) ?? [],
  };
}
