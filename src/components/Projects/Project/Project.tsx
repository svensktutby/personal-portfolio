import React, { FC } from 'react';

import s from './Project.module.scss';
import styleBtn from '../../common/styles/button.module.scss';
import styleLink from '../../common/styles/link.module.scss';
import styleTitle from '../../common/styles/title.module.scss';
import styleCard from '../../common/styles/card.module.scss';
import defaultImage from '../../../assets/images/no-image.svg';
import { FilterType, ProjectItemType } from '../../../bll/store';
import {
  capitalizeFirstLetter,
  unCamelCase,
} from '../../../utils/textTransform';

type PropsType = {
  image: string;
  project: ProjectItemType;
  setProjectType: (type: FilterType) => void;
};

export const Project: FC<PropsType> = ({
  image,
  setProjectType,
  project: { title, description, link, projectType },
}) => {
  return (
    <div>
      <div className={`${styleCard.card} ${s.projectCard}`}>
        <div className={s.imageWrapper}>
          <img className={s.image} src={image || defaultImage} alt={title} />
          <div className={s.btnWrapper}>
            <a
              className={`${styleBtn.btn} ${s.btnDemo}`}
              href={link.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Demo
            </a>
            <a
              className={`${styleBtn.btn} ${styleBtn.btnLight}`}
              href={link.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={s.info}>
          <div className={s.content}>
            <h3 className={`${styleTitle.titleQuaternary} ${s.title}`}>
              {title}
            </h3>
            <div className={s.description}>{description}</div>
          </div>

          <div className={s.projectType}>
            <span>Project type: </span>
            <button
              className={`${styleLink.link} ${s.projectTypeLink}`}
              type="button"
              onClick={() => setProjectType(projectType)}
            >
              {`${capitalizeFirstLetter(unCamelCase(projectType))}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
