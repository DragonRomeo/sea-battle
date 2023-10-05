import style from './Header.module.css';
import { Indication } from './Indication/Indication';

export const Header = () => {
  return (
    <div className={style.header}>
      <Indication></Indication>
    </div>
  );
};
