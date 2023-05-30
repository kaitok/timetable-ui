import React, { useState } from 'react';

export interface BoxProps {
  title: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
}

const Box = (props: BoxProps) => {
  const [dragHeight, setDragHeight] = useState(100);

  const style = {
    width: props.width || '100px',
    height: `${dragHeight}px`,
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

  const handleDrag = (event) => {
    const dragAmount = event.clientY - 110;
    const newHeight = 100 + dragAmount;
    setDragHeight(newHeight);
  };

  return (
    <div style={style}>
      {props.title}
      <div draggable={true} onDrag={handleDrag} style={bottomStyle}></div>
    </div>
  );
};

export default Box;
