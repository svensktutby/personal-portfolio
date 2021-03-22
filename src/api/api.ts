import { BaseSyntheticEvent } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export const api = {
  sendEmail(e: BaseSyntheticEvent) {
    if (SERVICE_ID && TEMPLATE_ID && USER_ID) {
      return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
    } else {
      return Promise.reject();
    }
  },
};
