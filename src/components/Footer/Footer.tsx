import React, { FC } from 'react';

import s from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Social } from './Social';
import { SocialType } from '../../bll/store';

type FooterPropsType = {
  socialList: Array<SocialType>;
};

export const Footer: FC<FooterPropsType> = ({ socialList }) => {
  return (
    <footer className={s.footer}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.fullName}>Andrei Shved</div>
        <div className={s.socialWrapper}>
          <Social socialList={socialList} />
        </div>
        <div className={s.copyright}>&copy; Copyright 2021</div>
      </div>
    </footer>
  );
};
