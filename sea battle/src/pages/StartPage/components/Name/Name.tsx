import type { FC } from 'react';
import styles from './Name.module.css';

interface Props {
  text: string;
}

export const Name: FC<Props> = ({ text }) => {
  return (
    <>
      <p>{text}</p>
      <input type='text' />
    </>
  );
};
