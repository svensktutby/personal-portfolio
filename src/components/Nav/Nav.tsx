import React, { FC } from 'react';

import s from './Nav.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleLink from '../common/styles/Link.module.scss';

type HavPropsType = {
  navLinks: Array<string>;
};

export const Nav: FC<HavPropsType> = ({ navLinks }) => {
  return (
    <nav className={s.nav}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <ul className={s.list}>
          {navLinks.map((nl, idx) => {
            return (
              <li key={idx} className={s.item}>
                <a className={`${styleLink.link} ${s.link}`} href={`#${nl}`}>
                  {nl}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
