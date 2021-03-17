import React, { FC } from 'react';

import s from './Hire.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import styleBtn from '../common/styles/Button.module.scss';

export const Hire: FC = () => {
  return (
    <section className={s.hire}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <div>
          <h2 className={`${styleTitle.titleSecondary} ${s.title}`}>
            Let's work together!
          </h2>
          <p className={s.text}>
            I am available for freelance projects. Hire me and get your project
            done.
          </p>
        </div>
        <a className={`${styleBtn.btn}`} href="#contact">
          Hire me
        </a>
      </div>
    </section>
  );
};
