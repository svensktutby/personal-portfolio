import React, { BaseSyntheticEvent, FC, useState } from 'react';

import s from './Form.module.scss';
import styleBtn from '../../common/styles/button.module.scss';
import styleInput from '../../common/styles/input.module.scss';
import { api } from '../../../api';

export const Form: FC = () => {
  const [fetchRequest, setFetchRequest] = useState(false);

  const { sendEmail } = api;

  const submitHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setFetchRequest(true);

    sendEmail(e)
      .then((result) => {
        e.target.reset();
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setFetchRequest(false);
      });
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <label className={`${styleInput.inputWrapper} ${s.nameTitle}`}>
        <input
          className={`${styleInput.input} ${s.name}`}
          type="text"
          name="from_name"
          placeholder="Name"
          required
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.emailTitle}`}>
        <input
          className={`${styleInput.input} ${s.email}`}
          type="email"
          name="from_email"
          placeholder="Email"
          required
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.subjectTitle}`}>
        <input
          className={`${styleInput.input} ${s.subject}`}
          type="text"
          name="subject"
          placeholder="Subject"
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.messageTitle}`}>
        <textarea
          className={`${styleInput.input} ${s.message}`}
          name="message"
          placeholder="Message"
          required
        />
      </label>
      <div className={s.submitWrapper}>
        <button
          className={`${styleBtn.btn}`}
          type="submit"
          disabled={fetchRequest}
        >
          {fetchRequest ? (
            <span className={s.sendingText}>Sending...</span>
          ) : (
            <>Send message</>
          )}
        </button>
      </div>
    </form>
  );
};
