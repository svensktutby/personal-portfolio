import React, { FC } from 'react';
import s from './Skill.module.css';
import styleTitle from '../../common/styles/Title.module.css';

type SkillPropsType = {
  title: string;
  description: string;
};

export const Skill: FC<SkillPropsType> = ({ title, description }) => {
  return (
    <li className={s.skill}>
      <div className={s.icon} />
      <h3 className={`${styleTitle.titleTertiary} ${s.title}`}>{title}</h3>
      <div className={s.description}>{description}</div>
    </li>
  );
};
