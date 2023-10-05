import type { FC } from 'react';
import styles from './Name.module.css';
import { ChangeEvent } from 'react';

interface Props {
  text: string;
  name: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Name: FC<Props> = ({ text, name, id, onChange }) => {
  return (
    <>
      <p>{text}</p>
      <input type='text' name={name} id={id} onChange={onChange} />
    </>
  );
};
