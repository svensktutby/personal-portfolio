import React, { FC } from 'react';

import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

export const Main: FC = () => {
  return (
    <main className={s.main} id="home">
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.greeting}>
          <span>Hi, There</span>
          <h1>
            I am <span>Andrei Shved</span>
          </h1>
          <p>Frontend Developer</p>
        </div>
        <div className={s.photo} />
      </div>
    </main>
  );
};
