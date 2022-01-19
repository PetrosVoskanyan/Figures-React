import { useDispatch } from 'react-redux';
import { Avatar } from '../../../points/pointList/Avatar/avatar';
import { Button } from '../../../../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import "./circle-list-item.models.scss"
import PatchStyles from 'patch-styles';
import * as classes from './circle-list-item.models.scss';
import { circleSlice } from '../../../../../store';

export const CircleListItem = ({ circle }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(circleSlice.actions.deleteCircle(circle.uid));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="coordination">
        <Avatar text={circle.center.pointName} />
        <span className="coordinationText">Coordinates: (x:{circle.center.x}, y:{circle.center.y})</span>
        <span className="radius"> Radius: {circle.radius}</span>

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
