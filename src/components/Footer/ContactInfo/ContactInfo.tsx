import React, { FC } from 'react';

import s from './ContactInfo.module.scss';
import styleLink from '../../common/styles/Link.module.scss';
import { PersoanlInfoType } from '../../../bll/store';
import { SvgIcon } from '../../common/SvgIcon';

type PropsType = {
  personalInfo: PersoanlInfoType;
};

export const ContactInfo: FC<PropsType> = ({ personalInfo }) => {
  return (
    <div className={s.contactInfo}>
      {Object.entries(personalInfo).map((pi) => {
        const [key, value] = pi;

        return (
          <div key={key} className={s.singleInfo}>
            <div className={s.iconWrapper}>
              <SvgIcon type={key} />
            </div>

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
