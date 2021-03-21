import React, { FC } from 'react';
import { Link } from 'react-scroll';

import s from './LinkList.module.scss';
import styleLink from '../../common/styles/link.module.scss';

type PropsType = {
  links: Array<string>;
  active: boolean;
};

export const LinkList: FC<PropsType> = ({ links, active }) => {
  const listClassName = `${s.list} ${active ? s.active : ''}`;

  return (
    <ul className={listClassName}>
      {links.map((link, idx) => {
        return (
          <li key={idx} className={s.item}>
            <Link
              className={`${styleLink.link} ${s.link}`}
              to={link}
              smooth={true}
              duration={500}
              activeClass={s.active}
              spy={true}
            >
              {link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
