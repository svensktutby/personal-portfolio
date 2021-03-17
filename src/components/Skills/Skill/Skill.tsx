import React, { FC } from 'react';

import s from './Skill.module.scss';
import styleTitle from '../../common/styles/Title.module.scss';

type SkillPropsType = {
  title: string;
  description: string;
};

export const Skill: FC<SkillPropsType> = ({ title, description }) => {
  return (
    <div className={s.skillCard}>
      <div className={s.icon} />
      <h3 className={`${styleTitle.titleTertiary} ${s.title}`}>{title}</h3>
      <div className={s.description}>{description}</div>
    </div>
  );
};
