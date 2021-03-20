import React, { FC } from 'react';

import s from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Social } from './Social';
import { ProfileType, SocialType } from '../../bll/store';
import { ContactInfo } from './ContactInfo';

type PropsType = {
  socialList: Array<SocialType>;
  profile: ProfileType;
};

export const Footer: FC<PropsType> = ({ socialList, profile }) => {
  const { contact, name, lastname } = profile;

  return (
    <footer className={s.footer}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <ContactInfo contact={contact} />

        <div className={s.footerMini}>
          <Social socialList={socialList} />

          <div className={s.copyright}>
            &copy; Copyright 2021, {`${name} ${lastname}`}
          </div>
        </div>
      </div>
    </footer>
  );
};
