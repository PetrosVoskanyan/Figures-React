import { useDispatch } from 'react-redux';
import { Avatar } from '../../../points/pointList/Avatar/avatar';
import { Button } from '../../../../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { triangleSlice } from '../../../../../store';
import PatchStyles from 'patch-styles';
import * as classes from './triangle-list-item.module.scss';

export const TriangleListItem = ({ triangle }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(triangleSlice.actions.deleteTriangle(triangle.uid));
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="coordinationInfo">
        <Avatar text={triangle.name} />
        <div>
          {
            triangle.points.map((item) => (
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
