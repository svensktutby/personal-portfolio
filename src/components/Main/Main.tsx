import React, { FC } from 'react';

import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleTitle from '../common/styles/Title.module.scss';
import myPhoto from '../../assets/images/my-photo.png';
import { Mouse } from '../common/Mouse';
import styleBtn from '../common/styles/Button.module.scss';

export const Main: FC = () => {
  return (
    <main className={s.main} id="home">
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.content}>
          <div className={s.intro}>
            <h1 className={`${styleTitle.titlePrimary} ${s.title}`}>
              Andrei&nbsp;<span>Shved</span>
            </h1>

            <p className={s.headline}>I'm a Frontend Developer</p>

            <div>
              <a className={styleBtn.btn} href="#" role="button">
                Download CV
              </a>
              <a
                className={`${styleBtn.btn} ${styleBtn.btnLight}  ${s.btnWork}`}
                href="#projects"
                role="button"
              >
                My work
              </a>
            </div>
          </div>
        </div>

        <div className={s.photo}>
          <img className={s.image} src={myPhoto} alt="Andrei Shved" />
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
