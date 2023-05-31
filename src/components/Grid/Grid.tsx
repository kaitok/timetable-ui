import React, { useState } from 'react';
import '../../global-style.css';
import styles from './Grid.module.css';

export interface GridProps {
  step: number;
  height: string;
}

const Grid = (props: GridProps) => {
  const gridContainerStyle = {
    width: '200px',
  };
  const gridCellStyle = {
    height: props.height || '50px',
  };
  return (
    <>
      <div className={styles.gridContainer} style={gridContainerStyle}>
        <div className={styles.gridCell} style={gridCellStyle}></div>
        <div className={styles.gridCell} style={gridCellStyle}></div>

        {Array.from({ length: props.step }, (_, index) => (
          <div
            key={index}
            className={styles.gridCell}
            style={gridCellStyle}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Grid;
