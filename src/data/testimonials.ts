import type { Testimonial } from '../interfaces'

import andrewAvatar from '../assets/Andrew Rathore.png'
import veraAvatar from '../assets/Vera Duncan.png'
import markAvatar from '../assets/Mark Smith.png'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sofia Martinez',
    text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel.',
    avatar: 'https://ui-avatars.com/api/?name=Sofia+Martinez&background=ede9fe&color=6c63ff&size=56',
  },
  {
    id: 2,
    name: 'Andrew Rathore',
    text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel.',
    avatar: andrewAvatar,
  },
  {
    id: 3,
    name: 'Vera Duncan',
    text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel.',
    avatar: veraAvatar,
  },
  {
    id: 4,
    name: 'Mark Smith',
    text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel.',
    avatar: markAvatar,
  },
  {
    id: 5,
    name: 'James Chen',
    text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Ullamcorper Scelerisque Mi, In Malesuada Felis Malesuada Vel.',
    avatar: 'https://ui-avatars.com/api/?name=James+Chen&background=ede9fe&color=6c63ff&size=56',
  },
]
