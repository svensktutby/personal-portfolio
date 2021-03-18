import { v1 } from 'uuid';

export type SkillType = {
  id: string;
  title: string;
  description: string;
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
        title: 'github',
        url: 'https://github.com/svensktutby',
      },
      {
        title: 'linkedin',
        url: 'https://www.linkedin.com/',
      },
      {
        title: 'twitter',
        url: 'https://www.twitter.com/svensktutby',
      },
      {
        title: 'telegram',
        url: 'https://web.telegram.org/svensktutby',
      },
    ],
    skills: [
      {
        id: v1(),
        title: 'React',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur inventore ipsam iusto nisi quasi quisquam, repellendus sapiente sint suscipit vel.',
      },
      {
        id: v1(),
        title: 'Redux',
        description:
          'Ab accusamus aperiam beatae dolores iusto, laborum magni maiores molestiae nesciunt quaerat repellendus saepe tempora ullam?',
      },
      {
        id: v1(),
        title: 'TypeScript',
        description:
          'Consectetur adipisicing elit. Cum impedit libero molestias, odit quaerat quas ratione sapiente.',
      },
      {
        id: v1(),
        title: 'JavaScript',
        description:
          'Consectetur adipisicing elit. Cum impedit libero molestias, odit quaerat quas ratione sapiente.',
      },
      {
        id: v1(),
        title: 'HTML5',
        description:
          'Consectetur adipisicing elit. Cum impedit libero molestias, odit quaerat quas ratione sapiente.',
      },
      {
        id: v1(),
        title: 'CSS3',
        description:
          'Consectetur adipisicing elit. Cum impedit libero molestias, odit quaerat quas ratione sapiente.',
      },
    ],
    projects: [
      {
        id: v1(),
        title: 'Social Network',
        description:
          'Consectetur adipisicing elit. Ab alias aliquid animi quasi quisquam, repellendus sapiente',
        image: {
          small: '',
          large: '',
        },
      },
      {
        id: v1(),
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
