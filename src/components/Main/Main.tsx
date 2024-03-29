import React, { FC } from 'react';
import { Link } from 'react-scroll';

import s from './Main.module.scss';
import styleContainer from '../common/styles/container.module.scss';
import styleTitle from '../common/styles/title.module.scss';
import styleBtn from '../common/styles/button.module.scss';
import styleTypewriter from '../common/styles/typewriter.module.scss';
import CV from '../../assets/cv/AndreiShvedCV.pdf';
import { Mouse } from '../common/Mouse';

type PropsType = {
  name: string;
  lastname: string;
  navLinks: Array<string>;
};

export const Main: FC<PropsType> = ({ name, lastname, navLinks }) => {
  const [, skillsLink, projectsLink] = navLinks;

  return (
    <main className={s.main} id="home">
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.content}>
          <div className={s.intro}>
            <h1 className={`${styleTitle.titlePrimary} ${s.title}`}>
              {name} <span>{lastname}</span>
            </h1>

            <p className={`${s.headline} ${styleTypewriter.typewriter}`}>
              I'm a <span>Frontend Developer&nbsp;</span>
            </p>

            <div className={s.btnWrapper}>
              <a
                className={styleBtn.btn}
                href={CV}
                download="Andrei Shved's resume"
              >
                Download CV
              </a>
              <Link
                className={`${styleBtn.btn} ${styleBtn.btnLight} ${s.btnWork}`}
                to={projectsLink}
                smooth={true}
                duration={500}
                tabIndex={0}
              >
                My work
              </Link>
            </div>
          </div>
        </div>

        <div className={s.mouseWrapper}>
          <Link
            className={s.link}
            to={skillsLink}
            smooth={true}
            duration={500}
            tabIndex={0}
          >
            <Mouse />
          </Link>
        </div>
      </div>
    </main>
  );
};
