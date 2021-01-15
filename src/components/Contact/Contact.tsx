import React, { FC } from 'react';
import s from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';
import styleTitle from '../common/styles/Title.module.css';
import { Form } from './Form';

export const Contact: FC = () => {
  return (
    <section className={s.contact} id="contact">
      <div className={`${styleContainer.container} ${s.container}`}>
        <h2 className={styleTitle.titleSecondary}>Contact</h2>
        <div className={s.formWrapper}>
          <Form />
        </div>
      </div>
    </section>
  );
};
