import React, { FC } from 'react';

import s from './App.module.scss';
import { StoreType } from './bll/store';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hire } from './components/Hire';

type AppPropsType = {
  store: StoreType;
};

export const App: FC<AppPropsType> = ({ store }) => {
  const {
    navLinks,
    filters,
    socialList,
    personalInfo,
    skills,
    projects,
    headings,
  } = store.getState.call(store);

  return (
    <div className={s.app}>
      <Header navLinks={navLinks} />
      <Main />
      <Skills skills={skills} heading={headings.skills} />
      <Hire heading={headings.hire} />
      <Projects
        projects={projects}
        heading={headings.projects}
        filters={filters}
      />
      <Contact heading={headings.contact} />
      <Footer socialList={socialList} personalInfo={personalInfo} />
    </div>
  );
};
