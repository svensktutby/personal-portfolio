import React, { FC } from 'react';

import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { HeadingType, ProjectType } from '../../bll/store';
import { Project } from './Project';
import { Heading } from '../common/Heading';
import { FilterBar } from '../common/FilterBar';
import { concatString } from '../../utils/textTransform';

import SocialNetwork from '../../assets/images/projects/social-network.png';
import Todolist from '../../assets/images/projects/todolist.png';
import Singolo from '../../assets/images/projects/singolo.png';
import Mishka from '../../assets/images/projects/mishka.png';
import MovieSearch from '../../assets/images/projects/movie-search.png';
import Englishforkids from '../../assets/images/projects/english-for-kids.png';

const images: Record<string, string> = {
  SocialNetwork,
  Todolist,
  Singolo,
  Mishka,
  MovieSearch,
  Englishforkids,
};

type PropsType = {
  projects: Array<ProjectType>;
  heading: HeadingType;
  filters: Array<string>;
};

export const Projects: FC<PropsType> = ({ projects, heading, filters }) => {
  return (
    <section className={s.projects} id="projects">
      <div className={`${styleContainer.container} ${s.container}`}>
        <Heading title={heading.title} description={heading.description} />

        <FilterBar list={filters} />

        <div className={s.projectCards}>
          {projects.map((project) => {
            const concatTitle = concatString(project.title);
            const image = images[concatTitle];

            return (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                image={image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
