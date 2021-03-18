import React, { FC } from 'react';

import s from './Skill.module.scss';
import styleTitle from '../../common/styles/Title.module.scss';
import { SvgIcon } from '../../common/SvgIcon';

type PropsType = {
  title: string;
  description: string;
};

export const Skill: FC<PropsType> = ({ title, description }) => {
  return (
    <div>
      <div className={s.skillCard}>
        <div className={s.icon}>
          <SvgIcon type={title} />
        </div>
        <h3 className={`${styleTitle.titleQuaternary} ${s.title}`}>{title}</h3>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};
