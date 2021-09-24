import React from 'react';
import CalendarIcon from '../assets/CalendarIcon';
import OverviewIcon from '../assets/OverviewIcon';
import styles from './Navigation.module.css';

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
      <CalendarIcon
        {...(activeLink === 'calendar' ? currentPage : otherPage)}
      />
      <OverviewIcon
        {...(activeLink === 'overview' ? currentPage : otherPage)}
      />
    </nav>
  );
}

export default Navigation;
