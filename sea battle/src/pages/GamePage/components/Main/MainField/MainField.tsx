import style from './MainField.module.css';
import { WrapperField } from './WrapperField/WrapperField';

export const MainField = () => {
  return (
    <div className={style.mainField}>
      <WrapperField />
      <WrapperField />
    </div>
  );
};
