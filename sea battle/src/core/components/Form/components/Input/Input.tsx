import type { FC } from 'react';

interface Props {
  type: string;
  name?: string;
  value?: string; //For server this important props, but we have only front.
  checked?: boolean;
  onChange?: React.FormEvent<HTMLInputElement>;
  children?: JSX.Element;
}

export const Input: FC<Props> = ({ type }) => {
  return <input type={type} />;
};
