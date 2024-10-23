import React from 'react';
import styles from './styles.module.css';

const LoaderSvg = () => (
    <>
    <div className={styles.loaderBox}>
        <div className={styles.loaderContent}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect
      fill="#0088C4"
      stroke="#0088C4"
      strokeWidth="15"
      width="30"
      height="30"
      x="25"
      y="50"
    >
      <animate
        attributeName="y"
        calcMode="spline"
        dur="1.2s"
        values="50;120;50;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.4s"
      />
    </rect>
    <rect
      fill="#0088C4"
      stroke="#0088C4"
      strokeWidth="15"
      width="30"
      height="30"
      x="85"
      y="50"
    >
      <animate
        attributeName="y"
        calcMode="spline"
        dur="1.2s"
        values="50;120;50;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.2s"
      />
    </rect>
    <rect
      fill="#0088C4"
      stroke="#0088C4"
      strokeWidth="15"
      width="30"
      height="30"
      x="145"
      y="50"
    >
      <animate
        attributeName="y"
        calcMode="spline"
        dur="1.2s"
        values="50;120;50;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>
  </svg>
  </div>
  </div>
  </>
);

export default LoaderSvg;
