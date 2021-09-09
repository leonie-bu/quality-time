import React from 'react';
import styles from './Typography.module.css';
import type { ReactNode } from 'react';

type TypographyProps = {
  size:
    | 'xl'
    | 'l'
    | 'm'
    | 'sdarkcolor'
    | 'slightcolor'
    | 'xsregweight'
    | 'xslightweight'
    | 'mm';
  children: ReactNode;
};

const sizeMap = {
  xl: styles.xl,
  l: styles.l,
  m: styles.m,
  sdarkcolor: styles.sdarkcolor,
  slightcolor: styles.slightcolor,
  xsregweight: styles.xsregweight,
  xslightweight: styles.xslightweight,
  mm: styles.mm,
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  switch (size) {
    case 'xl':
      return <h1 className={sizeMap[size]}>{children}</h1>;
    case 'l':
      return <h2 className={sizeMap[size]}>{children}</h2>;
    case 'm':
    case 'sdarkcolor':
    case 'slightcolor':
    case 'xsregweight':
    case 'xslightweight':
    case 'mm':
      return <p className={sizeMap[size]}>{children}</p>;
  }
}
