import { useSelector } from 'react-redux';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { triangleSlice } from '../../../store';
import { TriangleList } from './triangleList/triangle-list';
import * as classes from './triangles.page.models.scss';
import PatchStyles from 'patch-styles';

export const TrianglePage = () => {
  const triangle = useSelector(triangleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={2}
      />

      <div className="PageContent">
        <TriangleList points={triangle}/>

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  )
}
