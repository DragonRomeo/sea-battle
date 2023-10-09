import style from './Header.module.css';
import { Indication } from './Indication/Indication.tsx';

export const Header = () => {
  return (
    <header className={style.header}>
      <Indication></Indication>
    </header>
  );
};
