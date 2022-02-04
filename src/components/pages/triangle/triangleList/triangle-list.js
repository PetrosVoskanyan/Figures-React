import { TriangleListItem } from './triangle-list-item/triangle-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchTrianglesListQuery } from '../../../../store/services';

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
  const { data: triangles } = useFetchTrianglesListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });


  return (
    <PatchStyles classNames={classes}>
      <div className="triangleList">
        {
          triangles?.map((item) => (
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
