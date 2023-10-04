import type { FC } from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  action?: string;
}

export const Form: FC<Props> = () => {
  return (
    <>
      <form></form>
    </>
  );
};
