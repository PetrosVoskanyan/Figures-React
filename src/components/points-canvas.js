import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  canvas: {
    width: '100%',
    height: theme.spacing(59),
    borderRadius: theme.spacing(1.5),
    border: '1px solid #103153FF',
  },
}));

export const PointsCanvas = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <canvas className="canvas" />
    </PatchStyles>
  );
};
