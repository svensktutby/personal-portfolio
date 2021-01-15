import React, { FC } from 'react';
import s from './Nav.module.css';
import styleLink from '../common/styles/Link.module.css';
import { v1 } from 'uuid';

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
