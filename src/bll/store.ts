import { randomId } from '../utils/randomId';

export type SkillType = {
  id: string;
  title: string;
  list: Array<string>;
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

export type ContactItemType = {
  title: string;
  url: string;
};

export type ContactType = {
  address: ContactItemType;
  phone: ContactItemType;
  email: ContactItemType;
};

export type ProfileType = {
  name: string;
  lastname: string;
  availableForWork: boolean;
  contact: ContactType;
};

export type LinkType = {
  demo: string;
  github: string;
};

export type ProjectType = 'mobileApp' | 'webSite' | 'landingPage';
export type FilterType = 'all' | ProjectType;

export type ProjectItemType = {
  id: string;
  projectType: ProjectType;
  title: string;
  description: string;
  link: LinkType;
};

export type RootStateType = {
  navLinks: Array<string>;
  filters: Array<FilterType>;
  skills: Array<SkillType>;
  projects: Array<ProjectItemType>;
  socialList: Array<SocialType>;
  headings: Record<string, HeadingType>;
  profile: ProfileType;
};

export type StoreType = {
  _state: RootStateType;
  getState: () => RootStateType;
};

export const store: StoreType = {
  _state: {
    navLinks: ['home', 'skills', 'projects', 'contact'],
    filters: ['all', 'mobileApp', 'webSite', 'landingPage'],
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
          'Redux ducks',
          'Flux Standard Action',
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
          'Graphql, Apollo',
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
          'Semantic',
          'BEM naming',
          'Media elements',
          'Web Storage',
          'W3C validation',
          'Bootstrap',
          'Gulp',
          'Pug',
        ],
      },
      {
        id: randomId(),
        title: 'CSS3',
        list: [
          'Responsive design',
          'Flexible design',
          'Animation',
          'Gradients',
          '3D Transforms',
          'SASS',
          'LESS',
        ],
      },
    ],
    projects: [
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Social Network',
        description:
          'This application based on Create React App, Typescript and Redux. Developed with React Class' +
          ' and functional components, React-router, React-Context, Redux-thunk, Redux-form, Axios, REST API, ESLint' +
          ' Airbnb,' +
          ' Jest.',
        link: {
          demo: 'https://svensktutby.github.io/react-way-of-samurai',
          github: 'https://github.com/svensktutby/react-way-of-samurai',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Todolist',
        description:
          'This application based on Create React App, Typescript and Redux. Developed with functional components and React hooks, React-Context, Redux-thunk, React Formic, Axios, REST API, ESLint Airbnb, Jest, Storybook.',
        link: {
          demo: 'https://svensktutby.github.io/todolist',
          github: 'https://github.com/svensktutby/todolist',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Counter',
        description:
          'This application based on Create React App, Typescript and Redux (there is also a version with Mobx in another branch).  Developed with functional components and React hooks, React-router, web storage HTML5 API, Jest.',
        link: {
          demo: 'https://svensktutby.github.io/react-counter',
          github: 'https://github.com/svensktutby/react-counter',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Trivia game',
        description:
          'This game application based on Create React App and Typescript. Developed with functional' +
          ' components and React hooks (there are also some custom hooks), Fetch requests, REST API, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby-trivia-game.netlify.app',
          github:
            'https://github.com/svensktutby/make-20-react-apps/tree/master/07-trivia-game',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Infinite Image Gallery',
        description:
          'This application based on Create React App and Typescript. Developed with functional' +
          ' components and React hooks, Fetch requests, REST API, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby-infinite-image-gallery.netlify.app',
          github:
            'https://github.com/svensktutby/make-20-react-apps/tree/master/06-infinite-image-gallery',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Paper Rock Scissors',
        description:
          'This game application based on Create React App and Typescript. Developed with functional' +
          ' components and React hooks, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby-paper-rock-scissors.netlify.app/',
          github:
            'https://github.com/svensktutby/make-20-react-apps/tree/master/04-paper-rock-scissors',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Movie Search',
        description:
          'This application was developed with Vanilla JS, semantic HTML5 tags, CSS3 transformations and animations,' +
          ' Swiper library, REST API. Were used Webpack, Pug, SCSS, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby-movie-search.netlify.app',
          github: 'https://github.com/svensktutby/',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'English for kids',
        description:
          'This game application was developed with Vanilla JS, semantic HTML5 tags, CSS3 transformations and animations, media and web storage HTML5 API. Were used Webpack, Pug, SCSS, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby-english-for-kids.netlify.app',
          github: 'https://github.com/svensktutby/',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Virtual keyboard',
        description:
          'This application was developed with Vanilla JS, semantic HTML5 tags, CSS3 transformations and' +
          ' animations. Were used Webpack, Pug, SCSS, ESLint Airbnb.',
        link: {
          demo: 'https://svensktutby.github.io/virtual-keyboard',
          github: 'https://github.com/svensktutby/virtual-keyboard',
        },
      },
      {
        id: randomId(),
        projectType: 'mobileApp',
        title: 'Keksobooking',
        description:
          'This application was developed with Vanilla JS, semantic HTML5 tags, CSS3 transformations and animations. Were used XMLHttpRequest requests, HTTP, JSON, ESLint.',
        link: {
          demo: 'https://svensktutby.github.io/html-a-js-keksobooking',
          github: 'https://github.com/svensktutby/html-a-js-keksobooking',
        },
      },
      {
        id: randomId(),
        projectType: 'landingPage',
        title: 'Singolo',
        description:
          'This landing page was developed with perfect pixel method, W3C validation, BEM, responsive and' +
          ' flexible layout, semantic HTML5 tags, CSS3 transformations and animations, cross browser supporting, Vanilla JS' +
          ' touch slider and effects.',
        link: {
          demo: 'https://svensktutby.github.io/singolo',
          github: 'https://github.com/svensktutby/singolo',
        },
      },
      {
        id: randomId(),
        projectType: 'landingPage',
        title: 'Hipsweet',
        description:
          'This landing page was developed with perfect pixel method, W3C validation, BEM, semantic HTML5 tags, CSS3' +
          ' transformations and animations, cross browser supporting. Were used Gulp, SCSS, Yandex maps API, jQuery libraries.',
        link: {
          demo: 'https://svensktutby.github.io/loftschool-hipsweet/dist',
          github: 'https://github.com/svensktutby/loftschool-hipsweet',
        },
      },
      {
        id: randomId(),
        projectType: 'webSite',
        title: 'Mishka',
        description:
          'This web site was developed with perfect pixel method, W3C validation, BEM, responsive and flexible layout,' +
          ' semantic HTML5 tags, CSS3 transformations and animations, cross browser supporting, Vanilla JS. Were used Gulp,' +
          ' SCSS, Yandex maps API, Stylelint.',
        link: {
          demo: 'https://svensktutby.github.io/html-a-mishka/build',
          github: 'https://github.com/svensktutby/html-a-mishka',
        },
      },
      {
        id: randomId(),
        projectType: 'webSite',
        title: 'Gllacy',
        description:
          'This web site was developed with perfect pixel method, W3C validation, BEM, semantic HTML5 tags,' +
          ' CSS3 transformations and animations, cross browser supporting, Vanilla JS. Was used Google maps API.',
        link: {
          demo: 'https://svensktutby.github.io/html-a-gllacy',
          github: 'https://github.com/svensktutby/html-a-gllacy',
        },
      },
      {
        id: randomId(),
        projectType: 'webSite',
        title: 'Nerds',
        description:
          'This web site was developed with perfect pixel method, W3C validation, BEM, semantic HTML5 tags,' +
          ' CSS3 transformations and animations, cross browser supporting, Vanilla JS. Was used Google maps API.',
        link: {
          demo: 'https://svensktutby.github.io/html-a-nerds/',
          github: 'https://github.com/svensktutby/html-a-nerds',
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
    profile: {
      name: 'Andrei',
      lastname: 'Shved',
      availableForWork: true,
      contact: {
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
  },
  getState() {
    return this._state;
  },
};
