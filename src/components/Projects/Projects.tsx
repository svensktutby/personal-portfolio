import React, { FC } from 'react';

import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { HeadingType, ProjectType } from '../../bll/store';
import { Project } from './Project';
import { Heading } from '../common/Heading';
import { FilterBar } from '../common/FilterBar';

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
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
