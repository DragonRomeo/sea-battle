import { CoordinateCell } from './Field/CoordinateCell/CoordinateCell';
import { Field } from './Field/Field';
import style from './WrapperField.module.css';

export const WrapperField = () => {
  const alphabet = ['','A', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div className={style.mainContainer}>
      <div className={style.firstContainer}>
        <div className={style.alphabet}>
          {alphabet.map((item, index) => (
            <CoordinateCell value={item} key={index} />
          ))}
        </div>
      </div>
      <div className={style.secondContainer}>
        <div className={style.numbers}>
          {numbers.map((item, index) => (
            <CoordinateCell value={item} key={index} />
          ))}
        </div>
        <Field />
      </div>
    </div>
  );
};
