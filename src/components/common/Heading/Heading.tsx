import React, { FC } from 'react';

import s from './Heading.module.scss';

type HeadingPropsType = {
  title: string;
  description?: string;
};

export const Heading: FC<HeadingPropsType> = ({ title, description }) => {
  return (
    <div className={s.heading}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </div>
  );
};
