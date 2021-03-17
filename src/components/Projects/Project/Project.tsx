import React, { FC } from 'react';

import s from './Project.module.scss';
import styleBtn from '../../common/styles/Button.module.scss';
import styleTitle from '../../common/styles/Title.module.scss';
import defaultImage from '../../../assets/images/no-image.svg';
import { ImageType } from '../../../bll/store';

type ProjectPropsType = {
  title: string;
  description: string;
  image: ImageType;
};

export const Project: FC<ProjectPropsType> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className={s.projectCard}>
      <div className={s.imageWrapper}>
        <img
          className={s.image}
          src={image.small || defaultImage}
          alt={title}
        />
        <a
          className={`${styleBtn.btn} ${s.imageLink}`}
          href={image.large || defaultImage}
        >
          Show
        </a>
      </div>
      <div className={s.info}>
        <h3 className={`${styleTitle.titleTertiary} ${s.title}`}>{title}</h3>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};
