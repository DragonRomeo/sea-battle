import React from 'react';
import { Field } from './Field/Field';
import style from './MainField.module.css'


export const MainField = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.fieldContainer}>
        <Field />
      </div>
      <div className={style.fieldContainer}>
        <Field />
      </div>
    </div>
  );
};
