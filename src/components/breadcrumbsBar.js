import { Button } from './button/button';
import { useNavigate } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  BreadcrumbsBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 0,
    margin: theme.spacing(3),
  },
}));

export const BreadcrumbsBar = ({ current }) => {
  const classes = useStyles();

  const pages = [
    { pageName: 'Points' },
    { pageName: 'Circles' },
    { pageName: 'Triangles' },
    { pageName: 'Rectangles' },
  ];

  const navigate = useNavigate();

  return (
    <PatchStyles classNames={classes}>
      <div className="BreadcrumbsBar">
        <Button size="small">
          {
            pages.map((item, index) => (
              current === index ? item.pageName : ''
            ))
          }
        </Button>

        <Button
          size="big"
          variant="contained"
          onClick={() => navigate('create')}
        >
          Create
        </Button>
      </div>
    </PatchStyles>
  );
};
