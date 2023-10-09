import style from './MainField.module.css';
import { ShipsPort } from './ShipsPort/ShipsPort.tsx';
import { WrapperField } from './WrapperField/WrapperField.tsx';

export const MainField = () => {
  return (
    <div className={style.mainField}>
      <ShipsPort />
      <WrapperField />
      <WrapperField />
    </div>
  );
};
