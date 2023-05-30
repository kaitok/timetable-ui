import React, { FC } from 'react';

export type Props = {
  text: string;
  className?: string;
};

export const Box: FC<Props> = ({ text, className = '' }) => {
  return <div className={className}>{text}</div>;
};
