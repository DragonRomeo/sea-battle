import type { FC } from 'react';
import styles from './Button.module.css';

interface Props {
  value: string;
  className?: string;
  children?: JSX.Element;
}

export const Button: FC<Props> = () => {
  return <button className={styles.button}></button>;
};
