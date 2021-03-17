import React, { FC } from 'react';

import s from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Form } from './Form';
import { HeadingType } from '../../bll/store';
import { Heading } from '../common/Heading';

type PropsType = {
  heading: HeadingType;
};

export const Contact: FC<PropsType> = ({ heading }) => {
  return (
    <section className={s.contact} id="contact">
      <div className={`${styleContainer.container} ${s.container}`}>
        <Heading title={heading.title} description={heading.description} />
        <div className={s.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  );
};
