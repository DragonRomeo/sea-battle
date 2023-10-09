import type { FC } from 'react';
import styles from './Button.module.css';

interface Props {
  value: string;
  className?: string;
  children?: JSX.Element;
}

export const Button: FC<Props> = ({ value }) => {
  return <button className={styles.button}>{value}</button>;
};
