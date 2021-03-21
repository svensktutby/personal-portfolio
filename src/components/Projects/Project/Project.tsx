import React, { FC } from 'react';

import s from './Project.module.scss';
import styleBtn from '../../common/styles/button.module.scss';
import styleTitle from '../../common/styles/title.module.scss';
import styleCard from '../../common/styles/card.module.scss';
import defaultImage from '../../../assets/images/no-image.svg';
import { LinkType } from '../../../bll/store';

type PropsType = {
  title: string;
  description: string;
  image: string;
  link: LinkType;
};

export const Project: FC<PropsType> = ({ title, description, image, link }) => {
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
          <h3 className={`${styleTitle.titleQuaternary} ${s.title}`}>
            {title}
          </h3>
          <div className={s.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
