import PatchStyles from 'patch-styles';
import { RectangleListItem } from './rectangleListItem/rectangle-list-item';
import { makeStyles } from '@mui/styles';
import { useFetchRectanglesListQuery } from '../../../../store/services';

const useStyles = makeStyles((theme) => ({
  rectangleList: {
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

export const RectangleList = () => {
  const classes = useStyles();
  const { data: rectangles } = useFetchRectanglesListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="rectangleList">
        {
          rectangles?.map((item) => (
            <RectangleListItem
              key={item.uid}
              rectangle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
