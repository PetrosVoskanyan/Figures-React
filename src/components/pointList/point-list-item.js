import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from './Avatar/avatar';
import './point-list.scss';
import { Button } from '../button/button';

export const PointListItem = ({ point, onDelete }) => {

  return (
    <div className="coordination">
      <Avatar text={point.pointName} />
      <span className="coordinationName">Coordinates: (x:{point.x}, y:{point.y})</span>

      <div className="deleteButton">
        <Button
          size="small"
          onClick={() => onDelete()}
        >
          <FontAwesomeIcon color="white" icon={faToilet} />
        </Button>
      </div>
    </div>
  );
};
