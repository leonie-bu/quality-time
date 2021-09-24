import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons';

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
      <Link to="/">
        <Icons
          type="calendar"
          {...(activeLink === 'calendar' ? currentPage : otherPage)}
        />
      </Link>
      <Link to="/">
        <Icons
          type="overview"
          {...(activeLink === 'overview' ? currentPage : otherPage)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
