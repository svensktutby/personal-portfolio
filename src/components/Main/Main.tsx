import React, { FC } from 'react';

import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import defaultImage from '../../assets/images/no-image.svg';
import myPhoto from '../../assets/images/my-photo.png';
import { Mouse } from '../common/Mouse';

export const Main: FC = () => {
  return (
    <main className={s.main} id="home">
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.content}>
          <div className={s.greeting}>
            <span>Hi, There</span>
            <h1>
              I am <span>Andrei Shved</span>
            </h1>
            <p>Frontend Developer</p>
          </div>
          <div className={s.photo}>
            <img
              className={s.image}
              src={myPhoto || defaultImage}
              alt="Andrei Shved"
            />
          </div>
        </div>
        <div className={s.mouseWrapper}>
          <a className={s.link} href="#skills">
            <Mouse />
          </a>
        </div>
      </div>
    </main>
  );
};
