import React, { FC } from 'react';

import s from './Form.module.scss';
import styleBtn from '../../common/styles/button.module.scss';
import styleInput from '../../common/styles/input.module.scss';

export const Form: FC = () => {
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={s.formInner}>
        <label className={`${styleInput.inputWrapper} ${s.nameTitle}`}>
          <input
            className={`${styleInput.input} ${s.name}`}
            type="text"
            placeholder="Name"
            required
          />
        </label>
        <label className={`${styleInput.inputWrapper} ${s.emailTitle}`}>
          <input
            className={`${styleInput.input} ${s.email}`}
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={`${styleInput.inputWrapper} ${s.subjectTitle}`}>
          <input
            className={`${styleInput.input} ${s.subject}`}
            type="text"
            placeholder="Subject"
          />
        </label>
        <label className={`${styleInput.inputWrapper} ${s.messageTitle}`}>
          <textarea
            className={`${styleInput.input} ${s.message}`}
            placeholder="Message"
            required
          />
        </label>
        <div className={s.submitWrapper}>
          <button className={`${styleBtn.btn} ${s.submit}`} type="submit">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};
