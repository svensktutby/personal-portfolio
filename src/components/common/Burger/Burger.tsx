import React, { FC } from 'react';

import s from './Burger.module.scss';

type PropsType = {
  status: boolean;
  toggleMenu: (status: boolean) => void;
};

export const Burger: FC<PropsType> = ({ status, toggleMenu }) => {
  const burgerClassName = `${s.burger} ${status ? s.close : ''}`;

  return (
    <button
      className={burgerClassName}
      onClick={() => toggleMenu(!status)}
      type="button"
    >
      <span />
    </button>
  );
};
