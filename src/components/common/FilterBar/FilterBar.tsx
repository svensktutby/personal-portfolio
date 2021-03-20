import React, { FC } from 'react';

import s from './FilterBar.module.scss';
import {
  capitalizeFirstLetter,
  unCamelCase,
} from '../../../utils/textTransform';

type PropsType = {
  list: Array<string>;
};

export const FilterBar: FC<PropsType> = ({ list }) => {
  return (
    <ul className={s.list}>
      <li>
        <a className={`${s.filter} ${s.filterActive}`} href={'*'}>
          All
        </a>
      </li>
      {list.map((item, idx) => (
        <li key={idx}>
          <a className={s.filter} href={`#${item}`}>
            {`${capitalizeFirstLetter(unCamelCase(item))}s`}
          </a>
        </li>
      ))}
    </ul>
  );
};
