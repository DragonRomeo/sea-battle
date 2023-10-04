import type { FC } from 'react';

interface Props {
  text?: string;
  children?: JSX.Element;
}

export const Label: FC<Props> = ({ children }) => {
  return <label>{children}</label>;
};
