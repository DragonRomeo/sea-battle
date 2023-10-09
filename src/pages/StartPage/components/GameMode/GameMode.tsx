import cn from 'classnames'
import type {FC} from 'react';

import {GameMode} from "../../../../core/store/game-mode";
import styles from './GameMode.module.css';

interface Props {
  value: GameMode;
  className?: string;
  checked: boolean;
  onChange: (mode: GameMode) => void;
  children?: string;
}

export const RadioInput: FC<Props> = ({
  value,
  className,
  checked,
  onChange,
  children
                                      }) => {
  return (
    <div className={cn(className, styles.choiceItem)} onClick={() => onChange(value)}>
      <input
        type='radio'
        name='choice'
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      ></input>
      <p className={styles.text}>{children}</p>
    </div>
  )
}
