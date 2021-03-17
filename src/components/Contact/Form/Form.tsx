import React, { FC } from 'react';

import s from './Form.module.scss';
import styleBtn from '../../common/styles/Button.module.scss';
import styleInput from '../../common/styles/Input.module.scss';

export const Form: FC = () => {
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={s.inputsWrapper}>
        <label className={`${styleInput.inputWrapper} ${s.textTitle}`}>
          <input className={`${styleInput.input} ${s.text}`} type="text" />
        </label>
        <label className={`${styleInput.inputWrapper} ${s.emailTitle}`}>
          <input
            className={`${styleInput.input} ${s.email}`}
            type="email"
            required
          />
        </label>
        <label className={`${styleInput.inputWrapper} ${s.messageTitle}`}>
          <textarea className={`${styleInput.input} ${s.message}`} />
        </label>
      </div>
      <div className={s.submitWrapper}>
        <button className={`${styleBtn.btn} ${s.submit}`} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
