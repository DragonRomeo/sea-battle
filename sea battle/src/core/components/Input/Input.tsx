import type { FC } from 'react';

interface Props {
  type: string;
  children?: JSX.Element;
}

export const Input: FC<Props> = ({ type }) => {
  return <input type={type} />;
};
