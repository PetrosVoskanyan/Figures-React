import { useSelector } from 'react-redux';
import { pointsSlice } from '../../../store';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { PointsList } from './pointList/point-list';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import * as classes from './points.page.models.scss';
import PatchStyles from 'patch-styles';

export const PointsPage = () => {
  const points = useSelector(pointsSlice.selectors.selectAll);


  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={0}
      />

      <div className="PageContent">
        <PointsList points={points} />

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  );
};
