import { useSelector } from 'react-redux';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { CirclesList } from './circleList/circle-list';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import PatchStyles from 'patch-styles';
import * as classes from './circle.page.models.scss';
import { circleSlice } from '../../../store';

export const CirclePage = () => {
  const circles = useSelector(circleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={1}
      />

      <div className="PageContent">
        <CirclesList points={circles}/>

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  )
}
