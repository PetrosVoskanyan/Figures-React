import './point-list.models.scss';
import { PointListItem } from './pointListItem/point-list-item';
import { useSelector } from 'react-redux';
import { pointsSlice } from '../../../../store';
import * as classes from './point-list.models.scss';
import PatchStyles from 'patch-styles';

export const PointsList = () => {
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
