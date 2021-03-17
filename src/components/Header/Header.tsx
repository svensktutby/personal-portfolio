import React, { FC } from 'react';

import s from './Header.module.scss';
import { Nav } from '../Nav';

type HeaderPropsType = {
  navLinks: Array<string>;
};

export const Header: FC<HeaderPropsType> = ({ navLinks }) => {
  return (
    <header className={s.header}>
      <Nav navLinks={navLinks} />
    </header>
  );
};
