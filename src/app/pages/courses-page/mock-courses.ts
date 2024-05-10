import { TCourse } from 'src/app/pages/course-page/course-page.interface';
import { EPracticeStatus } from 'src/app/shared/interfaces/practice-status.interface';

export const mockCourses: TCourse[] = [
  {
    id: 1,
    name: 'awd',
    imageUrl: 'assets/images/img.png',
    deletable: true,
    practices: [
      {
        id: 1,
        status: EPracticeStatus.DONE,
        name: 'awdaww',
        description:
          'Текст задания, еще текст задания, еще текст задания, еще текст задания, ' +
          'еще текст задания, еще текст задания, еще текст задания, еще текст задания, ' +
          'еще текст задания, еще текст задания, еще текст задания, еще текст задания, ' +
          'еще текст задания, еще текст задания, еще текст задания, еще текст задания, ' +
          'еще текст задания, еще текст задания, еще текст задания',
        examples: [
          {
            id: 1,
            inputData: 'qwerty',
            outputData: '123',
          },
          {
            id: 2,
            inputData: 'qwerty',
            outputData: '123',
          },
        ],
      },
      {
        id: 2,
        status: EPracticeStatus.HARD_DEADLINE,
        name: 'wd',
        description: 'wwww',
        examples: [
          {
            id: 3,
            inputData: 'qwerty',
            outputData: '123',
          },
        ],
      },
      {
        id: 3,
        status: EPracticeStatus.SOFT_DEADLINE,
        name: 'Очень длинное название почему бы и нет ну такое норм название',
        description: 'wwww',
        examples: [],
      },
      {
        id: 4,
        status: EPracticeStatus.BAD_TRY,
        name: 'rr',
        description: 'wwww',
        examples: [
          {
            id: 4,
            inputData: 'qwerty',
            outputData: '123',
          },
          {
            id: 5,
            inputData: 'qwerty',
            outputData: '123',
          },
        ],
      },
      {
        id: 5,
        status: EPracticeStatus.EMPTY,
        name: 'rr',
        description: 'wwww',
        examples: [
          {
            id: 6,
            inputData: 'qwerty',
            outputData: '123',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'qwe',
    imageUrl: 'assets/images/img_1.png',
    deletable: true,
    practices: [],
  },
  {
    id: 3,
    name: 'zxc',
    imageUrl: 'assets/images/img_2.png',
    deletable: true,
    practices: [],
  },
];
