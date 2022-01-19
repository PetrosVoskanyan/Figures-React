import { useSelector } from 'react-redux';
import { CircleListItem } from './circle-list-item/circle-list-item';
import PatchStyles from 'patch-styles';
import * as classes from './circle-list.models.scss';
import { circleSlice } from '../../../../store';

export const CirclesList = () => {
  const circles = useSelector(circleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="circleList">
        {
          circles.map((item) => (
            <CircleListItem
              key={item.uid}
              circle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
