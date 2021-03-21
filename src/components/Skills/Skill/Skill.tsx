import React, { FC } from 'react';

import s from './Skill.module.scss';
import styleTitle from '../../common/styles/title.module.scss';
import styleCard from '../../common/styles/card.module.scss';
import { SvgIcon } from '../../common/SvgIcon';

type PropsType = {
  title: string;
  list: Array<string>;
};

export const Skill: FC<PropsType> = ({ title, list }) => {
  return (
    <div>
      <div className={`${styleCard.card} ${s.skillCard}`}>
        <div className={s.icon}>
          <SvgIcon type={title} />
        </div>
        <h3 className={`${styleTitle.titleQuaternary} ${s.title}`}>{title}</h3>
        <ul className={s.list}>
          {list.map((item, idx) => (
            <li key={idx} className={s.skill}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
