import { NavBar } from './navBar/navBar';
import { Outlet } from 'react-router-dom';
import { Logo } from './logo/logos';
import * as classes from '../App.models.scss';
import PatchStyles from 'patch-styles';

export const PageShell = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="Page">
        <div className="header">
          <Logo />
          <NavBar />
        </div>

        <Outlet />
      </div>
    </PatchStyles>
  )
}
