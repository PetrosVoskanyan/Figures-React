import './point-list.scss';
import { PointListItem } from './point-list-item';

export const PointsList = ({ points, onDeleteClick }) => {
  return (
    <div className="pointList">
      {
        points.map((item, index) => (
          <PointListItem
            point={item}
            onDelete={() => onDeleteClick(index)}
          />
        ))
      }
    </div>
  );
};
