import { Button } from './button/button';
import { useNavigate } from 'react-router-dom';
import * as classes from '../App.models.scss';
import PatchStyles from 'patch-styles';

export const BreadcrumbsBar = ({ current }) => {
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
