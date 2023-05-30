import React from 'react';

export interface BoxProps {
  title: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
}

const Box = (props: BoxProps) => {
  const style = {
    width: props.width || '100px',
    height: props.height || '100px',
    borderRadius: props.borderRadius || '0px',
    background: props.backgroundColor || '#000',
    position: 'relative',
  };

  const bottomStyle = {
    position: 'absolute',
    width: '100%',
    height: '10px',
    bottom: '0',
    cursor: 'ns-resize',
  };

  return (
    <div style={style}>
      {props.title}
      <div style={bottomStyle}></div>
    </div>
  );
};

export default Box;
