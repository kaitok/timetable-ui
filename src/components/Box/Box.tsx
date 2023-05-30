import React from 'react';

export interface BoxProps {
  text: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
}

const Box = (props: BoxProps) => {
  const style = {
    width: props.width,
    borderRadius: props.borderRadius || '0px',
    padding: props.padding || '8px 20px',
    background: props.backgroundColor || '#000',
  };

  return <div style={style}>{props.text}</div>;
};

export default Box;
