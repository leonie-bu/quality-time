import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const XL = (): JSX.Element => <Typography size="xl">Monat</Typography>;

export const L = (): JSX.Element => (
  <Typography size="l">Überschrift Startseite</Typography>
);

export const M = (): JSX.Element => <Typography size="m">Datum</Typography>;

export const SDark = (): JSX.Element => (
  <Typography size="sdark">Zahlen im Kalender</Typography>
);

export const SMedium = (): JSX.Element => (
  <Typography size="smedium">Schrift im Eingabefeld</Typography>
);

export const SLight = (): JSX.Element => (
  <Typography size="slight">Schrift im Button</Typography>
);

export const XS = (): JSX.Element => <Typography size="xs">Mo-So</Typography>;

export const MM = (): JSX.Element => (
  <Typography size="mm">Aktivität</Typography>
);
