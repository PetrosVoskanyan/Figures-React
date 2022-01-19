import { useSelector } from 'react-redux';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { rectangleSlice } from '../../../store';
import * as classes from './rectangle.page.models.scss';
import PatchStyles from 'patch-styles';
import { RectangleList } from './rectangleList/rectangle-list';

export const RectanglePage = () => {
  const rectangle = useSelector(rectangleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={3}
      />

      <div className="PageContent">
        <RectangleList points={rectangle}/>

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  )
}
