import React, { FC } from 'react';
import { v1 } from 'uuid';

import s from './ContactInfo.module.scss';
import styleLink from '../../common/styles/Link.module.scss';
import { PersoanlInfoType } from '../../../bll/store';

type PropsType = {
  personalInfo: PersoanlInfoType;
};

export const ContactInfo: FC<PropsType> = ({ personalInfo }) => {
  return (
    <div className={s.contactInfo}>
      {Object.entries(personalInfo).map((pi) => {
        const [key, value] = pi;

        return (
          <div key={v1()} className={`${s.singleInfo} ${s[key]}`}>
            <p className={s.infoContent}>
              <a
                className={`${styleLink.link} ${s.infoLink}`}
                href={value.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {value.title}
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};
