import { BreadcrumbsBar } from '../../breadcrumbsBar';
import { PointsList } from './pointList/point-list';
import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    display: 'flex',
    padding: [theme.spacing(0), theme.spacing(3)],
    gap: theme.spacing(2),
  },
}));

export const PointsPage = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={0}
      />

      <div className="PageContent">
        <PointsList />

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  );
};
