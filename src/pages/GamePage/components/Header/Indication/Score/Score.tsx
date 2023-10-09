import type { FC } from 'react';

interface Props {
  className: string;
  h5: string;
}

export const Score: FC<Props> = ({ className, h5 }) => {
  return (
    <div className={className}>
      <h5 className={h5}>Score</h5>
    </div>
  );
};
