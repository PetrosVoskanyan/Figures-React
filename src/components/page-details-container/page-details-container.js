import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageDetailsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}));

export const PageDetailsContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="PageDetailsContainer">{children}</div>
    </PatchStyles>
  );
};
