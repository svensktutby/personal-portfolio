import React, { FC } from 'react';
import s from './Form.module.css';
import styleBtn from '../../common/styles/Button.module.css';
import styleInput from '../../common/styles/Input.module.css';

export const Form: FC = () => {
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={s.inputsWrapper}>
        <label className={`${styleInput.InputWrapper} ${s.textTitle}`}>
          <input className={`${styleInput.Input} ${s.text}`} type="text" />
        </label>
        <label className={`${styleInput.InputWrapper} ${s.emailTitle}`}>
          <input
            className={`${styleInput.Input} ${s.email}`}
            type="email"
            required
          />
        </label>
        <label className={`${styleInput.InputWrapper} ${s.messageTitle}`}>
          <textarea className={`${styleInput.Input} ${s.message}`} />
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
