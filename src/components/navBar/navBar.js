import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  NavBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  NavButton: {
    color: "#8c8ebe",
    background: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "static",
    border: "none",
    height: theme.spacing(8),
    padding: [theme.spacing(0),theme.spacing(2)],
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold"
  },
  active: {
    color: "rgba(3, 244, 167, 1)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    borderBottom: "2px solid #03f4a7"
  }
}));

export const NavBar = () => {
  const classes = useStyles()

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
