import React, { FC } from 'react';

import s from './Header.module.scss';
import { Nav } from '../Nav';

type PropsType = {
  navLinks: Array<string>;
  name: string;
  lastname: string;
  availableForWork: boolean;
};

export const Header: FC<PropsType> = ({
  navLinks,
  name,
  lastname,
  availableForWork,
}) => {
  return (
    <header className={s.header}>
      <Nav
        navLinks={navLinks}
        name={name}
        lastname={lastname}
        availableForWork={availableForWork}
      />
    </header>
  );
};
