import style from './MainField.module.css';
import { ShipsPort } from './ShipsPort/ShipsPort';
import { WrapperField } from './WrapperField/WrapperField';

export const MainField = () => {
  return (
    <div className={style.mainField}>
      <ShipsPort />
      <WrapperField />
      <WrapperField />
    </div>
  );
};
