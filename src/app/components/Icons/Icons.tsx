import React from 'react';
import CalendarIcon from '../assets/CalendarIcon';
import DeleteIcon from '../assets/DeleteIcon';
import DoneIcon from '../assets/DoneIcon';
import EditIcon from '../assets/EditIcon';
import OverviewIcon from '../assets/OverviewIcon';
import PlusIcon from '../assets/PlusIcon';
import PlusBackgroundIcon from '../assets/PlusBackgroundIcon';
import FlowerIconSmall from '../assets/FlowerIconSmall';
import LetsGoIcon from '../assets/LetsGo';
import DivisionLineIcon from '../assets/DivisionLine';

type IconType =
  | 'calendar'
  | 'delete'
  | 'done'
  | 'edit'
  | 'overview'
  | 'plus'
  | 'plusBackground'
  | 'flowerSmall'
  | 'letsgo'
  | 'division';

type IconProps = {
  type: IconType;
  onClick?: () => void;
  className?: string;
  isClickable: boolean;
};

const Icons = ({ type, onClick, isClickable }: IconProps): JSX.Element => {
  const currentPage = {
    fill: 'var(--color-secondary)',
    stroke: 'var(--color-secondary)',
  };

  const otherPage = {
    fill: 'var(--color-action)',
    stroke: 'var(--color-action)',
  };

  const iconSizeMap: {
    [type in IconType]: JSX.Element;
  } = {
    calendar: <CalendarIcon {...(isClickable ? currentPage : otherPage)} />,
    delete: <DeleteIcon />,
    done: <DoneIcon />,
    edit: <EditIcon />,
    overview: <OverviewIcon {...(isClickable ? currentPage : otherPage)} />,
    plus: <PlusIcon />,
    plusBackground: <PlusBackgroundIcon />,
    flowerSmall: <FlowerIconSmall />,
    letsgo: <LetsGoIcon />,
    division: <DivisionLineIcon />,
  };
  return <div onClick={onClick}>{iconSizeMap[type]}</div>;
};

export default Icons;
