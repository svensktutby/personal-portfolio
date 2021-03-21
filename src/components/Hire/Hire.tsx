import React, { FC } from 'react';
import { Link } from 'react-scroll';

import s from './Hire.module.scss';
import styleContainer from '../common/styles/container.module.scss';
import styleBtn from '../common/styles/button.module.scss';
import { Heading } from '../common/Heading';
import { HeadingType } from '../../bll/store';

type PropsType = {
  heading: HeadingType;
  contactLink: string;
};

export const Hire: FC<PropsType> = ({ heading, contactLink }) => {
  return (
    <section className={s.hire}>
      <div className={`${styleContainer.container} ${s.container}`}>
        <div className={s.content}>
          <Heading title={heading.title} description={heading.description} />

          <Link
            className={styleBtn.btn}
            to={contactLink}
            smooth={true}
            duration={500}
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
};
