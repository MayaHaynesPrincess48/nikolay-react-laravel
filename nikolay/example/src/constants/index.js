import { IoLogoYoutube } from "react-icons/io"
import { SiHabr } from "react-icons/si"

import {
  mancircle1,
  mancircle2,
  mancircle3,
  mancircle4,
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  vcRu,
} from "../assets";


const navLinks = [
  {
    id: 'welcome',
    title: 'Welcome',
  },
  {
    id: 'myPublications',
    title: 'My Publications',
  },
  {
    id: 'coustomerReviews',
    title: 'Coustomer Reviews',
  },
  {
    id: 'events',
    title: 'Events',
  },
];

const linkUrls = [
  'VC', 'Telegram', 'Habr'
]

const topicTitles = [
  'Lorem ipsum', 'Dolor site amet', 'Sit amet', 'Consectetuer', 'Donec quam feils', 'Curabitur ullamcorper'
]

const publications = [
  {
    purpleText: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: '5 dolor',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget',
  },
  {
    purpleText: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: 'amet',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo',
  },
  {
    purpleText: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo',
    title: '13 sit',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
  },
  {
    purpleText: 'опишите задачу',
    text: 'Отправляя форму, вы соглашаетесь  на обработку персоналных',
    title: 'a 7 adipiscing',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo eget',
  },
]

const publicationUsers = [
  {
    url: mancircle1,
    title: 'mancircle1',
  },
  {
    url: mancircle2,
    title: 'mancircle2',
  },
  {
    url: mancircle3,
    title: 'mancircle3',
  },
  {
    url: mancircle4,
    title: 'mancircle4',
  },
]

const userDescriptioDatas = [
  {
    title: '20+',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    title: '50+',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    title: '187 + sit',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    title: '5 amet',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    title: '30+',
    content: ['Lorem', 'Ipsum Dolor'],
  },
]

const projects = [
  {
    date: '1 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car1,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '2 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car2,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '3 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car3,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '4 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car4,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  // {
  //   date: '5 April 2024',
  //   siteName: 'Amazon',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car5,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
  // {
  //   date: '6 April 2024',
  //   siteName: 'Amazon',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car6,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
  // {
  //   date: '7 April 2024',
  //   siteName: 'YouTube',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car7,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
];



export { navLinks, linkUrls, topicTitles, publications, publicationUsers, userDescriptioDatas, projects, };