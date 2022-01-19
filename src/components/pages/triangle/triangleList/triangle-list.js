import { useSelector } from 'react-redux';
import { triangleSlice } from '../../../../store';
import { TriangleListItem } from './triangle-list-item/triangle-list-item';
import PatchStyles from 'patch-styles';
import * as classes from './triangle-list.module.scss';

export const TriangleList = () => {
  const triangles = useSelector(triangleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="triangleList">
        {
          triangles.map((item) => (
            <TriangleListItem
              key={item.uid}
              triangle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
