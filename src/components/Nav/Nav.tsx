import React, { FC } from 'react';
import { v1 } from 'uuid';

import s from './Nav.module.scss';
import styleLink from '../common/styles/Link.module.scss';

type HavPropsType = {
  navLinks: Array<string>;
};

export const Nav: FC<HavPropsType> = ({ navLinks }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navLinks.map((nl) => {
          return (
            <li key={v1()} className={s.item}>
              <a className={styleLink.link} href={`#${nl}`}>
                {nl}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
