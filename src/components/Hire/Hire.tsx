import React, { FC } from 'react';

import s from './Hire.module.scss';
import styleContainer from '../common/styles/container.module.scss';
import styleBtn from '../common/styles/button.module.scss';
import { Heading } from '../common/Heading';
import { HeadingType } from '../../bll/store';

type PropsType = {
  heading: HeadingType;
};

export const Hire: FC<PropsType> = ({ heading }) => {
  return (
    <section className={s.hire}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.content}>
          <Heading title={heading.title} description={heading.description} />

          <a className={styleBtn.btn} href="#contact" role="button">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
};
