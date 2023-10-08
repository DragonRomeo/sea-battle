import { Ship } from './Ship/Ship';
import style from './ShipsPort.module.css';

const ships = {
  shipVeryBig: 1,
  shipLarge: 2,
  shipMedium: 3,
  shipSmall: 4,
};

export const ShipsPort = () => {
  const shipsRender: Array<JSX.Element> = [];

  Object.entries(ships).forEach((item) => {
    for (let i = 0; i < item[1]; i++) {
      console.log(i);
      shipsRender.push(
        <Ship key={`${item[0]}${item[1]}${i}`} className={style[item[0]]} />
      );
    }
  });

  return <div className={style.container}>{shipsRender}</div>;
};
