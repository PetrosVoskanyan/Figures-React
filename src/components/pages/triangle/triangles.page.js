import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { TriangleList } from './triangleList/triangle-list';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    display: 'flex',
    padding: [theme.spacing(0), theme.spacing(3)],
    gap: theme.spacing(2),
  },
}));

export const TrianglePage = () => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={2}
      />

      <div className="PageContent">
        <TriangleList />

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  );
};
