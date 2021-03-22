import React, { FC, useState } from 'react';

import s from './FilterBar.module.scss';
import {
  capitalizeFirstLetter,
  unCamelCase,
} from '../../../utils/textTransform';
import { FilterType } from '../../../bll/store';

type PropsType = {
  filters: Array<FilterType>;
  setFilter: (filter: FilterType) => void;
};

export const FilterBar: FC<PropsType> = ({ filters, setFilter }) => {
  const [activeLink, setActiveLink] = useState('all');

  return (
    <ul className={s.list}>
      {filters.map((filter, idx) => {
        const filterClassName = `${s.filter} ${
          activeLink === filter ? s.active : ''
        }`;

        const setProjects = () => {
          setActiveLink(filter);
          setFilter(filter);
        };

        return (
          <li key={idx}>
            <button
              className={filterClassName}
              type="button"
              onClick={setProjects}
            >
              {`${capitalizeFirstLetter(unCamelCase(filter))}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
