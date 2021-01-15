import React, { FC } from 'react';
import './App.css';
import { StoreType } from './bll/store';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type AppPropsType = {
  store: StoreType;
};

export const App: FC<AppPropsType> = ({ store }) => {
  const { navLinks, socialList, skills, projects } = store.getState.call(store);

  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <Main />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer socialList={socialList} />
    </div>
  );
};
