import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/heroes" exact className={s.link} activeClassName={s.activeLink}>
        Main
      </NavLink>
      <NavLink to="/add-hero" exact className={s.link} activeClassName={s.activeLink}>
        Add Superhero
      </NavLink>
      <hr />
    </nav>
  );
}

