import React, { FC } from 'react';

import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { HeadingType, ProjectType } from '../../bll/store';
import { Project } from './Project';
import { Heading } from '../common/Heading';

type PropsType = {
  projects: Array<ProjectType>;
  heading: HeadingType;
};

export const Projects: FC<PropsType> = ({ projects, heading }) => {
  return (
    <section className={s.projects} id="projects">
      <div className={`${styleContainer.container} ${s.container}`}>
        <Heading title={heading.title} description={heading.description} />
        <div className={s.projectCards}>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
