import type { FC } from 'react';

interface Props {
  text: string;
}

export const Paragraph: FC<Props> = ({ text }) => {
  return <p>{text}</p>;
};
