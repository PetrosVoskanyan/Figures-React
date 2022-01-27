import { useSelector } from 'react-redux';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { rectangleSlice } from '../../../store';
import PatchStyles from 'patch-styles';
import { RectangleList } from './rectangleList/rectangle-list';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    display: 'flex',
    padding: [theme.spacing(0), theme.spacing(3)],
    gap: theme.spacing(2),
  },
}));

export const RectanglePage = () => {
  const classes = useStyles();
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
