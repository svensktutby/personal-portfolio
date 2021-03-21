import React, { FC } from 'react';

import s from './ContactInfo.module.scss';
import styleLink from '../../common/styles/link.module.scss';
import { ContactType } from '../../../bll/store';
import { SvgIcon } from '../../common/SvgIcon';

type PropsType = {
  contact: ContactType;
};

export const ContactInfo: FC<PropsType> = ({ contact }) => {
  return (
    <div className={s.contactInfo}>
      {Object.entries(contact).map((pi) => {
        const [key, value] = pi;

        return (
          <div key={key} className={s.contact}>
            <div className={s.icon}>
              <SvgIcon type={key} />
            </div>

            <p className={s.contactContent}>
              <a
                className={styleLink.link}
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
