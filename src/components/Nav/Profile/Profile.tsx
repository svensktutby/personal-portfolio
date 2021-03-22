import React, { FC } from 'react';
import { Link } from 'react-scroll';

import s from './Profile.module.scss';
import myAvatar from '../../../assets/images/my-avatar.jpeg';

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
      <Link className={s.link} to={homeLink} smooth={true} duration={500}>
        <img className={s.avatar} src={myAvatar} alt="Avatar" />
      </Link>
      <span className={s.name}>
        {name} {lastname}
      </span>
      <p className={statusClassName}>Available for work</p>
    </div>
  );
};
