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

export const Calendar = (): JSX.Element => <CalendarIcon />;

export const Delete = (): JSX.Element => <DeleteIcon />;

export const Done = (): JSX.Element => <DoneIcon />;

export const Edit = (): JSX.Element => <EditIcon />;

export const Overview = (): JSX.Element => <OverviewIcon />;

export const Plus = (): JSX.Element => <PlusIcon />;

export const PlusBackground = (): JSX.Element => <PlusBackgroundIcon />;

export const FlowerS = (): JSX.Element => <FlowerIconSmall />;
