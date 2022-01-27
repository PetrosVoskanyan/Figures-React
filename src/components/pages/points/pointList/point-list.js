import { PointListItem } from './pointListItem/point-list-item';
import { useSelector } from 'react-redux';
import { pointsSlice } from '../../../../store';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  pointList: {
    width: theme.spacing(50),
    height: theme.spacing(75),
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    gap: theme.spacing(2),

    background: '#0a1929ff',
    borderRadius: theme.spacing(1.2),
    margin: [theme.spacing(0), theme.spacing(3)],
  },
}));

export const PointsList = () => {
  const classes = useStyles();
  const points = useSelector(pointsSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="pointList">
        {
          points.map((item) => (
            <PointListItem
              key={item.id}
              point={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
