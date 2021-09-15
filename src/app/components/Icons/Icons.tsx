import React from 'react';
import CalendarIcon from '../assets/CalendarIcon';
import DeleteIcon from '../assets/DeleteIcon';
import DoneIcon from '../assets/DoneIcon';
import EditIcon from '../assets/EditIcon';
import OverviewIcon from '../assets/OverviewIcon';
import PlusIcon from '../assets/PlusIcon';
import PlusBackgroundIcon from '../assets/PlusBackgroundIcon';
import FlowerIconSmall from '../assets/FlowerIconSmall';

type IconType =
  | 'calendar'
  | 'delete'
  | 'done'
  | 'edit'
  | 'overview'
  | 'plus'
  | 'plusBackground'
  | 'flowerSmall';

type IconProps = {
  type: IconType;
  onClick: () => void;
};

const iconSizeMap: {
  [type in IconType]: JSX.Element;
} = {
  calendar: <CalendarIcon />,
  delete: <DeleteIcon />,
  done: <DoneIcon />,
  edit: <EditIcon />,
  overview: <OverviewIcon />,
  plus: <PlusIcon />,
  plusBackground: <PlusBackgroundIcon />,
  flowerSmall: <FlowerIconSmall />,
};

const Icons = ({ type }: IconProps): JSX.Element => {
  return <div>{iconSizeMap[type]}</div>;
};

export default Icons;
