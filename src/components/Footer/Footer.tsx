import React, { FC } from 'react';

import s from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Social } from './Social';
import { PersoanlInfoType, SocialType } from '../../bll/store';
import { ContactInfo } from './ContactInfo';

type PropsType = {
  socialList: Array<SocialType>;
  personalInfo: PersoanlInfoType;
};

export const Footer: FC<PropsType> = ({ socialList, personalInfo }) => {
  return (
    <footer className={s.footer}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <ContactInfo personalInfo={personalInfo} />

        <div className={s.footerMini}>
          <Social socialList={socialList} />

          <div className={s.copyright}>&copy; Copyright 2021, Andrei Shved</div>
        </div>
      </div>
    </footer>
  );
};
