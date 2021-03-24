import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './SubmitButton.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type PropsType = DefaultButtonPropsType & {
  fetching: boolean;
  success: boolean;
  error: boolean;
};

export const SubmitButton: FC<PropsType> = ({
  fetching,
  success,
  error,
  className,
  ...restProps
}) => {
  let finalClassName = `${s.btn} ${className ? className : ''}`;

  fetching
    ? (finalClassName += ` ${s.fetching}`)
    : (finalClassName += ` ${s.default}`);
  if (success) finalClassName += ` ${s.success}`;
  if (error) finalClassName += ` ${s.error}`;

  return <button className={finalClassName} {...restProps} />;
};
