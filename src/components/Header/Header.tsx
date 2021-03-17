import React, { FC } from 'react';

import s from './Header.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Nav } from '../Nav';

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
