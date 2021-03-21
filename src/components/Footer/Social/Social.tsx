import React, { FC } from 'react';

import s from './Social.module.scss';
import styleLink from '../../common/styles/link.module.scss';
import { SocialType } from '../../../bll/store';
import { SvgIcon } from '../../common/SvgIcon';

type PropsType = {
  socialList: Array<SocialType>;
};

export const Social: FC<PropsType> = ({ socialList }) => {
  return (
    <div className={s.social}>
      <ul className={s.list}>
        {socialList.map((sl) => {
          return (
            <li key={sl.id} className={`${s.item} ${s[sl.title]}`}>
              <a
                className={`${styleLink.link} ${s.link}`}
                href={sl.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <SvgIcon type={sl.title} />
                <span className={s.text}>{sl.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
