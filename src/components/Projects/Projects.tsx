import React, { FC, useState } from 'react';

import s from './Projects.module.scss';
import styleContainer from '../common/styles/container.module.scss';
import styleCardsLayout from '../common/styles/cardsLayout.module.scss';
import { FilterType, HeadingType, ProjectItemType } from '../../bll/store';
import { Project } from './Project';
import { Heading } from '../common/Heading';
import { FilterBar } from '../common/FilterBar';
import { concatString } from '../../utils/textTransform';

import SocialNetwork from '../../assets/images/projects/social-network.png';
import Todolist from '../../assets/images/projects/todolist.png';
import Counter from '../../assets/images/projects/counter.png';
import Triviagame from '../../assets/images/projects/trivia-game.png';
import InfiniteImageGallery from '../../assets/images/projects/image-gallery.png';
import PaperRockScissors from '../../assets/images/projects/paper-rock-scissors.png';
import MovieSearch from '../../assets/images/projects/movie-search.png';
import Englishforkids from '../../assets/images/projects/english-for-kids.png';
import Virtualkeyboard from '../../assets/images/projects/virtual-keyboard.png';
import Keksobooking from '../../assets/images/projects/keksobooking.png';
import Singolo from '../../assets/images/projects/singolo.png';
import Hipsweet from '../../assets/images/projects/hipsweat.png';
import Mishka from '../../assets/images/projects/mishka.png';
import Gllacy from '../../assets/images/projects/gllacy.png';
import Nerds from '../../assets/images/projects/nerds.png';

const images: Record<string, string> = {
  SocialNetwork,
  Todolist,
  Counter,
  Triviagame,
  InfiniteImageGallery,
  PaperRockScissors,
  MovieSearch,
  Englishforkids,
  Virtualkeyboard,
  Keksobooking,
  Singolo,
  Hipsweet,
  Mishka,
  Gllacy,
  Nerds,
};

export const filterProjects = (
  projects: Array<ProjectItemType>,
  filter: FilterType,
): Array<ProjectItemType> => {
  if (filter === 'all') return projects;
  else return projects.filter((p) => p.projectType === filter);
};

type PropsType = {
  projects: Array<ProjectItemType>;
  heading: HeadingType;
  filters: Array<FilterType>;
};

export const Projects: FC<PropsType> = ({ projects, heading, filters }) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = filterProjects(projects, filter);

  return (
    <section className={s.projects} id="projects">
      <div className={`${styleContainer.container} ${s.container}`}>
        <Heading title={heading.title} description={heading.description} />

        <div className={s.filterWrapper}>
          <FilterBar filters={filters} setFilter={setFilter} />
        </div>

        <div className={styleCardsLayout.layout}>
          {filteredProjects.map((project) => {
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
