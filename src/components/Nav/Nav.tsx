import React, { FC } from 'react';

import s from './Nav.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleLink from '../common/styles/Link.module.scss';
import { Profile } from '../Header/Profile';

type PropsType = {
  navLinks: Array<string>;
  name: string;
  lastname: string;
  availableForWork: boolean;
};

export const Nav: FC<PropsType> = ({
  navLinks,
  name,
  lastname,
  availableForWork,
}) => {
  return (
    <nav className={s.nav}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <Profile
          homeLink={navLinks[0]}
          name={name}
          lastname={lastname}
          availableForWork={availableForWork}
        />

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
