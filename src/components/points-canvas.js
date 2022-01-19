import PatchStyles from 'patch-styles';
import * as classes from '../App.models.scss';

export const PointsCanvas = () => {
  return (
    <PatchStyles classNames={classes}>
      <canvas className="canvas" />
    </PatchStyles>
  );
};
