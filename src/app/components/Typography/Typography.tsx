import React from 'react';
import styles from './Typography.module.css';
import type { ReactNode } from 'react';

type TypographyProps = {
  size: 'xl' | 'l' | 'm' | 'sdark' | 'smedium' | 'slight' | 'xs' | 'mm';
  children: ReactNode;
};

const sizeMap = {
  xl: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorPrimary} ${styles.xl}`,
  l: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorWhite} ${styles.l}`,
  m: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorSecondary} ${styles.m}`,
  sdark: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorAction} ${styles.s}`,
  smedium: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorTertiary} ${styles.s}`,
  slight: `${styles.familyPrimary} ${styles.weightReg} ${styles.colorPrimary} ${styles.s}`,
  xs: `${styles.familyPrimary} ${styles.weightLight} ${styles.colorAction} ${styles.xs}`,
  mm: `${styles.familySecondary} ${styles.weightReg} ${styles.colorSecondary} ${styles.mm}`,
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  if (size === 'xl') {
    return <h1 className={sizeMap[size]}>{children}</h1>;
  }
  if (size === 'l') {
    return <h2 className={sizeMap[size]}>{children}</h2>;
  } else {
    return <p className={sizeMap[size]}>{children}</p>;
  }
}
