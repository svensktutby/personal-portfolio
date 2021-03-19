import { randomId } from '../utils/randomId';

export type SkillType = {
  id: string;
  title: string;
  list: Array<string>;
};

export type ImageType = {
  small: string;
  large: string;
};

export type HeadingType = {
  title: string;
  description: string;
};

export type SocialType = {
  id: string;
  title: string;
  url: string;
};

export type PersoanlInfoItemType = {
  title: string;
  url: string;
};

export type PersoanlInfoType = {
  address: PersoanlInfoItemType;
  phone: PersoanlInfoItemType;
  email: PersoanlInfoItemType;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
};

export type RootStateType = {
  navLinks: Array<string>;
  skills: Array<SkillType>;
  projects: Array<ProjectType>;
  socialList: Array<SocialType>;
  headings: Record<string, HeadingType>;
  personalInfo: PersoanlInfoType;
};

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
};

export const store: StoreType = {
  _state: {
    navLinks: ['home', 'skills', 'projects', 'contact'],
    socialList: [
      {
        id: randomId(),
        title: 'github',
        url: 'https://github.com/svensktutby',
      },
      {
        id: randomId(),
        title: 'linkedin',
        url: 'https://www.linkedin.com/in/svensktutby',
      },
      {
        id: randomId(),
        title: 'twitter',
        url: 'https://www.twitter.com/svensktutby',
      },
      {
        id: randomId(),
        title: 'telegram',
        url: 'https://t.me/svensktutby',
      },
    ],
    skills: [
      {
        id: randomId(),
        title: 'React',
        list: [
          'Functional components',
          'Class components',
          'Hooks',
          'HOC',
          'Lifecycle',
          'Context',
          'Material UI',
          'Ant Design',
          'Storybook',
        ],
      },
      {
        id: randomId(),
        title: 'Redux',
        list: [
          'Flux',
          'Redux ducks',
          'Middleware',
          'Thunk',
          'Saga',
          'Redux devtool',
        ],
      },
      {
        id: randomId(),
        title: 'TypeScript',
        list: ['Interface', 'Generics', 'Decorators', 'Enum', 'Infer'],
      },
      {
        id: randomId(),
        title: 'JavaScript',
        list: [
          'ES6',
          'Promise, Async/Await',
          'REST API',
          'SOLID',
          'OOP',
          'TDD',
          'Jest',
          'Webpack',
        ],
      },
      {
        id: randomId(),
        title: 'HTML5',
        list: [
          'W3C, WHATWG',
          'Semantic',
          'Media elements',
          'Web Storage',
          'WebSocket',
          'IndexedDB',
          'Gulp',
          'Pug',
        ],
      },
      {
        id: randomId(),
        title: 'CSS3',
        list: [
          'Animation',
          'Media queries',
          'Gradients',
          '3D Transforms',
          'Filter',
          'SASS',
          'LESS',
        ],
      },
    ],
    projects: [
      {
        id: randomId(),
        title: 'Social Network',
        description:
          'Consectetur adipisicing elit. Ab alias aliquid animi quasi quisquam, repellendus sapiente',
        image: {
          small: '',
          large: '',
        },
      },
      {
        id: randomId(),
        title: 'Todolist',
        description:
          'Atque commodi dicta distinctio, dolor dolorem eum facere fugit hic illo incidunt ipsam libero, minima',
        image: {
          small: '',
          large: '',
        },
      },
    ],
    headings: {
      about: {
        title: 'About me',
        description: 'Get to know me',
      },
      skills: {
        title: 'My skills',
        description: 'The knowledge I have acquired',
      },
      hire: {
        title: "Let's work together!",
        description:
          'I am available for freelance projects. Hire me and get your project done.',
      },
      projects: {
        title: 'My projects',
        description: 'Showcasing some of my best work',
      },
      contact: {
        title: 'Get in Touch',
        description: 'Feel free to contact me anytime',
      },
    },
    personalInfo: {
      address: {
        title: 'Minsk, Belarus',
        url: 'https://goo.gl/maps/6X2q42Z2v4MF5sbg8',
      },
      phone: {
        title: '+375 (29) 763-35-15',
        url: 'tel:+375297633515',
      },
      email: {
        title: 'svensk.tut.by@gmail.com',
        url: 'mailto:svensk.tut.by@gmail.com',
      },
    },
  },
  getState() {
    return this._state;
  },
};
