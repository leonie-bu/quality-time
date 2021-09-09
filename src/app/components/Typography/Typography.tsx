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
