import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../Avatar/avatar';
import '../point-list.models.scss';
import { Button } from '../../../../button/button';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../../../store';
import * as classes from './point-list-item.models.scss';
import PatchStyles from 'patch-styles';

export const PointListItem = ({ point }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(pointsSlice.actions.deletePoint(point.uid));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="coordination">
        <Avatar text={point.pointName} />
        <span className="coordinationText">Coordinates: (x:{point.x}, y:{point.y})</span>

        <div className="deleteButton">
          <Button
            size="small"
            onClick={() => handleDeleteTask()}
          >
            <FontAwesomeIcon color="white" icon={faToilet} />
          </Button>
        </div>
      </div>
    </PatchStyles>
  );
};
