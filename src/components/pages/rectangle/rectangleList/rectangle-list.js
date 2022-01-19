import { useSelector } from 'react-redux';
import { rectangleSlice } from '../../../../store';
import PatchStyles from 'patch-styles';
import * as classes from './rectangle-list.models.scss';
import { RectangleListItem } from './rectangleListItem/rectangle-list-item';

export const RectangleList = () => {
  const rectangles = useSelector(rectangleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="rectangleList">
        {
          rectangles.map((item) => (
            <RectangleListItem
              key={item.uid}
              rectangle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
