import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#1b1538ff',
  },
  siteName: {
    color: 'rgba(3, 244, 167, 1)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    position: 'static',
    textTransform: 'uppercase',
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: theme.spacing(3),
    lineHeight: theme.spacing(3.5),
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.1em',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: [theme.spacing(0), theme.spacing(1.2)],
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="logoContainer">
        <LogoSvg />
        <h1 className="siteName">Figures</h1>
      </div>
    </PatchStyles>
  );
};
