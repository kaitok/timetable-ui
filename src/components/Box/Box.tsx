import React, { useState } from 'react';
import '../../global-style.css';
import styles from './Box.module.css';

export interface BoxProps {
  title: string;
  width?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}

const Box = (props: BoxProps) => {
  const [dragHeight, setDragHeight] = useState(100);
  const [prevBoxHeight, setPrevBoxHeight] = useState(100);

  const commonStyle = {
    width: props.width || '90px',
    borderRadius: props.borderRadius || '4px',
    backgroundColor: props.backgroundColor || '#000',
    color: props.color || '#fff',
  };

  const boxStyle = {
    ...commonStyle,
    height: `${dragHeight}px`,
  };

  const prevBoxStyle = {
    ...commonStyle,
    height: `${prevBoxHeight}px`,
  };

  const boxDescription = {
    fontSize: props.fontSize || '12px',
    padding: '10px',
  };

  const handleDrag = (event) => {
    const dragAmount = Math.round((event.clientY - 115) / 10) * 10;
    const newHeight = 100 + dragAmount;
    setDragHeight(newHeight);
  };
  const handleDragEnd = (event) => {
    setPrevBoxHeight(dragHeight);
  };

  return (
    <>
      <div style={boxStyle} className={styles.box}>
        <div style={prevBoxStyle} className={styles.prevBox}></div>
        <div style={boxDescription}>{props.title}</div>
        <div
          draggable={true}
          onDragEnd={handleDragEnd}
          onDrag={handleDrag}
          className={styles.bottom}
        ></div>
      </div>
    </>
  );
};

export default Box;
