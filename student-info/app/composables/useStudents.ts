export interface Student {
  name: string
  studentId: string
  course: string
  year: number
  email: string
  buttonColor: 'navy' | 'gold' | 'outline'
}

export const useStudents = (): Student[] => [
  {
    name: 'Krischelle Ann Mernillo',
    studentId: '2023-0001',
    course: 'BS Information Technology',
    year: 3,
    email: 'krischelle.mernillo@example.com',
    buttonColor: 'navy',
  },
  {
    name: 'Lhyzl Dooma',
    studentId: '2023-0002',
    course: 'BS Information Technology',
    year: 3,
    email: 'lhyzl.dooma@example.com',
    buttonColor: 'gold',
  },
  {
    name: 'Zym Makinano',
    studentId: '2023-0003',
    course: 'BS Information Technology',
    year: 3,
    email: 'zym.makinano@example.com',
    buttonColor: 'outline',
  },
]
