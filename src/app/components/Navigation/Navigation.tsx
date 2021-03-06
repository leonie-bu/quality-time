import React from 'react';
import styles from './Navigation.module.css';
import CalendarIcon from '../assets/CalendarIcon';
import OverviewIcon from '../assets/OverviewIcon';
import { Link } from 'react-router-dom';

export type NavigationProps = {
  activeLink: 'calendar' | 'overview';
  className?: string;
};

function Navigation({ activeLink, className }: NavigationProps): JSX.Element {
  const currentPage = {
    fill: 'var(--color-secondary)',
    stroke: 'var(--color-secondary)',
  };

  const otherPage = {
    fill: 'var(--color-action)',
    stroke: 'var(--color-action)',
  };

  return (
    <nav className={`${styles.navigation} ${className}`}>
      <Link to="calendar">
        <CalendarIcon
          {...(activeLink === 'calendar' ? currentPage : otherPage)}
        />
      </Link>
      <Link to="overview">
        <OverviewIcon
          {...(activeLink === 'overview' ? currentPage : otherPage)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
