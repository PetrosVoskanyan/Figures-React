import { NavBar } from './navBar/navBar';
import { Outlet } from 'react-router-dom';
import { Logo } from './logo/logos';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Page: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: [theme.spacing(0), theme.spacing(3)],

    position: 'static',
    height: theme.spacing(8),
    left: 0,
    right: 0,
    top: 0,

    background: '#1B1538',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',

    flex: 'none',
    order: 0,
    flexGrow: 0,
    margin: 0,
  },
}));

export const PageShell = () => {
  const classes = useStyles();

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
  );
};
