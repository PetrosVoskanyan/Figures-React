import { useDispatch } from 'react-redux';
import { Avatar } from '../../../points/pointList/Avatar/avatar';
import { Button } from '../../../../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { rectangleSlice } from '../../../../../store';
import PatchStyles from 'patch-styles';
import * as classes from './rectangle-list-item.models.scss';

export const RectangleListItem = ({ rectangle }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(rectangleSlice.actions.deleteRectangle(rectangle.uid));
  };

  return (
    <PatchStyles classNames={classes} >
      <div className="coordinationInfo">
        <Avatar text={rectangle.name} />
        <div>
          {
            rectangle.points.map((item) => (
              <div className="coordination">
                <Avatar text={item.pointName} />
                <span className="coordinationText">Coordinates: (x:{item.x}, y:{item.y})</span>
              </div>
            ))
          }
        </div>
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
