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
    profile,
    skills,
    projects,
    headings,
  } = store.getState.call(store);

  const { name, lastname, availableForWork } = profile;

  return (
    <div className={s.app}>
      <Header
        navLinks={navLinks}
        name={name}
        lastname={lastname}
        availableForWork={availableForWork}
      />
      <div className={s.sectionsWrapper}>
        <Main name={name} lastname={lastname} navLinks={navLinks} />
        <Skills skills={skills} heading={headings.skills} />
        <Hire heading={headings.hire} contactLink={navLinks[3]} />
        <Projects
          projects={projects}
          heading={headings.projects}
          filters={filters}
        />
        <Contact heading={headings.contact} />
        <Footer socialList={socialList} profile={profile} />
      </div>
    </div>
  );
};
