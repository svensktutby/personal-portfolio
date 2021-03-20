import React, { FC } from 'react';

import s from './Profile.module.scss';
import myAvatar from '../../../assets/images/my-avatar.jpg';

type PropsType = {
  homeLink: string;
  name: string;
  lastname: string;
  availableForWork: boolean;
};

export const Profile: FC<PropsType> = ({
  homeLink,
  name,
  lastname,
  availableForWork,
}) => {
  const statusClassName = `${s.status} ${
    !availableForWork ? s.notAvailable : ''
  }`;

  return (
    <div className={s.profile}>
      <a href={`#${homeLink}`}>
        <img className={s.avatar} src={myAvatar} alt="Avatar" />
      </a>
      <span className={s.name}>
        {name} {lastname}
      </span>
      <p className={statusClassName}>Available for work</p>
    </div>
  );
};
