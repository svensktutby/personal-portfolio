import React, { FC, useState } from 'react';

import s from './Nav.module.scss';
import styleContainer from '../common/styles/container.module.scss';
import { Profile } from './Profile';
import { Burger } from '../common/Burger';
import { LinkList } from './LinkList';
import { Overlay } from '../common/Overlay';

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
  const [menuActive, setMenuActive] = useState(false);

  const closeHandler = () => {
    setMenuActive(false);
  };

  return (
    <nav className={s.nav}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <Burger status={menuActive} toggleMenu={setMenuActive} />

        <Profile
          homeLink={navLinks[0]}
          name={name}
          lastname={lastname}
          availableForWork={availableForWork}
        />

        {menuActive ? (
          <Overlay closeHandler={closeHandler}>
            <LinkList
              links={navLinks}
              active={menuActive}
              closeHandler={closeHandler}
            />
          </Overlay>
        ) : (
          <LinkList
            links={navLinks}
            active={menuActive}
            closeHandler={closeHandler}
          />
        )}
      </div>
    </nav>
  );
};
