import React, { FC } from 'react';
import { Nav } from '../Nav';
import s from './Header.module.css';
import styleContainer from '../common/styles/Container.module.css';

type HeaderPropsType = {
  navLinks: Array<string>;
};

export const Header: FC<HeaderPropsType> = ({ navLinks }) => {
  return (
    <div className={s.headerWrapper}>
      <header className={s.header}>
        <div className={`${styleContainer.container} ${s.container}`}>
          <Nav navLinks={navLinks} />
        </div>
      </header>
    </div>
  );
};
