import './navBar.module.scss';
import { NavLink } from 'react-router-dom';
import * as classes from './navBar.module.scss';
import clsx from 'clsx';

export const NavBar = () => {

  const pages = [
    { pageName: 'Points' },
    { pageName: 'Circles' },
    { pageName: 'Triangles' },
    { pageName: 'Rectangles' },
  ];

  return (
    <div className={classes.NavBar}>
      {
        pages.map((item, index) => (
          <NavLink
            to={item.pageName}
            key={index}
            className={({ isActive }) => clsx(classes.NavButton, { [classes.active]: isActive })}
          >
            {item.pageName}
          </NavLink>
        ))
      }
    </div>
  );
};
