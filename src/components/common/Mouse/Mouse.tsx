import React, { FC } from 'react';

import s from './Mouse.module.scss';

export const Mouse: FC = () => {
  return (
    <div className={s.mouse}>
      <div className={s.mouseShape}>
        <div className={s.mouseWheel} />
      </div>
    </div>
  );
};
