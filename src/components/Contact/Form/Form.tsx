import React, { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';

import s from './Form.module.scss';
import styleInput from '../../common/styles/input.module.scss';
import { SubmitButton } from '../../common/SubmitButton';
import { api } from '../../../api';
import { setEmptyStringObjectValues } from '../../../utils/objectHelpers';

export const Form: FC = () => {
  const [fetchRequest, setFetchRequest] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState<
    FormDataType | Record<string, string>
  >({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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
      .then(() => {
        setFormData(setEmptyStringObjectValues(formData));
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        finallyCallback();
      });
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.currentTarget.value });
  };

  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.currentTarget.value });
  };

  const changeSubjectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, subject: e.currentTarget.value });
  };

  const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, message: e.currentTarget.value });
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <label className={`${styleInput.inputWrapper} ${s.nameTitle}`}>
        <input
          className={`${styleInput.input} ${s.name}`}
          type="text"
          name="from_name"
          placeholder="Name"
          onChange={changeNameHandler}
          value={formData.name}
          required
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.emailTitle}`}>
        <input
          className={`${styleInput.input} ${s.email}`}
          type="email"
          name="from_email"
          placeholder="Email"
          onChange={changeEmailHandler}
          value={formData.email}
          required
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.subjectTitle}`}>
        <input
          className={`${styleInput.input} ${s.subject}`}
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={changeSubjectHandler}
          value={formData.subject}
        />
      </label>
      <label className={`${styleInput.inputWrapper} ${s.messageTitle}`}>
        <textarea
          className={`${styleInput.input} ${s.message}`}
          name="message"
          placeholder="Message"
          onChange={changeMessageHandler}
          value={formData.message}
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

type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
