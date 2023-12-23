import { EPracticeStatus } from './pages/course-page/pages/practice-page/practice-page.interface'
import { TCourse } from './pages/course-page/course-page.interface'

export const mockCourses: TCourse[] = [
  {
    id: 1,
    name: 'awd',
    imageUrl:
      'https://bairesdev.mo.cloudinary.net/blog/2020/10/Top-100-programming-languages.jpg?tx=w_3840,q_auto',
    deletable: true,
    practices: [
      {
        id: 1,
        status: EPracticeStatus.DONE,
        name: 'awdaww',
        description: 'wwww',
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
    imageUrl:
      'https://bairesdev.mo.cloudinary.net/blog/2020/10/Top-100-programming-languages.jpg?tx=w_3840,q_auto',
    deletable: true,
    practices: [],
  },
  {
    id: 3,
    name: 'zxc',
    imageUrl:
      'https://bairesdev.mo.cloudinary.net/blog/2020/10/Top-100-programming-languages.jpg?tx=w_3840,q_auto',
    deletable: true,
    practices: [],
  },
]
