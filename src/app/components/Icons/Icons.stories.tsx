import React from 'react';
import CalendarIcon from '../assets/CalendarIcon';
import DeleteIcon from '../assets/DeleteIcon';
import DoneIcon from '../assets/DoneIcon';
import EditIcon from '../assets/EditIcon';
import OverviewIcon from '../assets/OverviewIcon';
import PlusBackgroundIcon from '../assets/PlusBackgroundIcon';
import PlusIcon from '../assets/PlusIcon';
import FlowerIconSmall from '../assets/FlowerIconSmall';
import Icons from './Icons';

export default {
  title: 'Component/Icons',
  component: Icons,
};

export const Calendar = (): JSX.Element => (
  <CalendarIcon onClick={() => console.log('Test')} />
);

export const Delete = (): JSX.Element => (
  <DeleteIcon onClick={() => console.log('Test')} />
);

export const Done = (): JSX.Element => (
  <DoneIcon onClick={() => console.log('Test')} />
);

export const Edit = (): JSX.Element => (
  <EditIcon onClick={() => console.log('Test')} />
);

export const Overview = (): JSX.Element => (
  <OverviewIcon onClick={() => console.log('Test')} />
);

export const Plus = (): JSX.Element => (
  <PlusIcon onClick={() => console.log('Test')} />
);

export const PlusBackground = (): JSX.Element => (
  <PlusBackgroundIcon onClick={() => console.log('Test')} />
);

export const FlowerS = (): JSX.Element => <FlowerIconSmall />;
