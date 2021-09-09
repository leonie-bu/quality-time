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

export const SDarkColor = (): JSX.Element => (
  <Typography size="sdarkcolor">Zahlen im Kalender</Typography>
);

export const SLightColor = (): JSX.Element => (
  <Typography size="slightcolor">Schrift im Button</Typography>
);

export const XSRegWeight = (): JSX.Element => (
  <Typography size="xsregweight">Schrift im Eingabefeld</Typography>
);

export const XSLightWeight = (): JSX.Element => (
  <Typography size="xslightweight">Mo-So</Typography>
);

export const MM = (): JSX.Element => (
  <Typography size="mm">Aktivität</Typography>
);
