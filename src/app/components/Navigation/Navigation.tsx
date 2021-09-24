import React from 'react';
import styles from './Navigation.module.css';
import CalendarIcon from '../assets/CalendarIcon';
import OverviewIcon from '../assets/OverviewIcon';

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
      <a href="#">
        <CalendarIcon
          {...(activeLink === 'calendar' ? currentPage : otherPage)}
        />
      </a>
      <a href="#">
        <OverviewIcon
          {...(activeLink === 'overview' ? currentPage : otherPage)}
        />
      </a>
    </nav>
  );
}

export default Navigation;
