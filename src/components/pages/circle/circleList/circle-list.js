import { CircleListItem } from './circle-list-item/circle-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchCirclesListQuery } from '../../../../store/services';

const useStyles = makeStyles((theme) => ({
  circleList: {
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

export const CirclesList = () => {
  const classes = useStyles();
  const { data: circles } = useFetchCirclesListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="circleList">
        {
          circles?.map((item) => (
            <CircleListItem
              key={item.uid}
              circle={item}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
