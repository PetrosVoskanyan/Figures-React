import { useSelector } from 'react-redux';
import { triangleSlice } from '../../../../store';
import { TriangleListItem } from './triangle-list-item/triangle-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  triangleList: {
    width: theme.spacing(50),
    height: theme.spacing(75),
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    gap: theme.spacing(2),

    background: '#0a1929ff',
    borderRadius: theme.spacing(1.2),
    margin: [theme.spacing(0), theme.spacing(3)],
  },
}));

export const TriangleList = () => {
  const classes = useStyles();
  const triangles = useSelector(triangleSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="triangleList">
        {
          triangles.map((item) => (
            <TriangleListItem
              key={item.uid}
              triangle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
