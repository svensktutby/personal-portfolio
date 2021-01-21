import React, { FC } from 'react';
import s from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import styleTitle from '../common/styles/Title.module.css';
import { ProjectType } from '../../bll/store';
import { Project } from './Project';

type ProjectsPropsType = {
  projects: Array<ProjectType>;
};

export const Projects: FC<ProjectsPropsType> = ({ projects }) => {
  return (
    <section className={s.projects} id="projects">
      <div className={`${styleContainer.container} ${s.container}`}>
        <h2 className={styleTitle.titleSecondary}>My projects</h2>
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
