import React, { BaseSyntheticEvent, FC, useState } from 'react';

import s from './Form.module.scss';
import styleInput from '../../common/styles/input.module.scss';
import { SubmitButton } from '../../common/SubmitButton';
import { api } from '../../../api';

export const Form: FC = () => {
  const [fetchRequest, setFetchRequest] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { sendEmail } = api;

  const submitHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setFetchRequest(true);

    const finallyCallback = (delay: number = 6000) => {
      setTimeout(() => {
        setFetchRequest(false);
        setSuccess(false);
        setError(false);
      }, delay);
    };

    sendEmail(e)
      .then((result) => {
        e.target.reset();
        setSuccess(true);
        console.log(result.text);
      })
      .catch((error) => {
        setError(true);
        console.log(error.text);
      })
      .finally(() => {
        finallyCallback();
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
        <SubmitButton
          type="submit"
          disabled={fetchRequest}
          fetching={fetchRequest}
          error={error}
          success={success}
        >
          <span>Send message</span>
        </SubmitButton>
      </div>
    </form>
  );
};
