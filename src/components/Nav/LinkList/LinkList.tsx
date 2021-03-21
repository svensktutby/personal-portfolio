import React, { FC } from 'react';

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
            <a className={`${styleLink.link} ${s.link}`} href={`#${link}`}>
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
