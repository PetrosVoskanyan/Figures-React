import { PageDetailsContainer } from '../../page-details-container/page-details-container';
import { PointsCanvas } from '../../points-canvas';
import { Outlet } from 'react-router-dom';
import { CirclesList } from './circleList/circle-list';
import { BreadcrumbsBar } from '../../breadcrumbsBar';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  PageContent: {
    display: 'flex',
    padding: [theme.spacing(0), theme.spacing(3)],
    gap: theme.spacing(2),
  },
}));

export const CirclePage = () => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <BreadcrumbsBar
        current={1}
      />

      <div className="PageContent">
        <CirclesList />

        <PageDetailsContainer>
          <PointsCanvas />

          <Outlet />
        </PageDetailsContainer>
      </div>
    </PatchStyles>
  );
};
