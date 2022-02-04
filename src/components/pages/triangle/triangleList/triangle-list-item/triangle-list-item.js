import { Button } from '../../../../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useDeleteTriangleMutation } from '../../../../../store/services';
import { Avatar } from '../../../points/pointList/Avatar/avatar';

const useStyles = makeStyles((theme) => ({
  coordinationInfo: {
    border: '1px solid #103153FF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    position: 'relative',
    background: '#001e3cff',
    borderRadius: theme.spacing(1.2),
  },
  coordination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    position: 'relative',
    border: 'none',
  },
  coordinationText: {
    margin: [theme.spacing(1.8), theme.spacing(2)],
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: theme.spacing(1.5),
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.01em',
    color: '#cdcbd1ff',
    whiteSpace: 'nowrap',
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: theme.spacing(0.5),
  },
}));

export const TriangleListItem = ({ triangle }) => {
  const classes = useStyles();
  const [deleteTriangle] = useDeleteTriangleMutation();

  const handleDeleteTask = () => {
    deleteTriangle(triangle.uid);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="coordinationInfo">
        <Avatar text={triangle.name} />
        <div>
          {
            triangle.points.map((item) => (
              <div className="coordination">
                <Avatar text={item.pointName} />
                <span className="coordinationText">Coordinates: (x:{item.x}, y:{item.y})</span>
              </div>
            ))
          }
        </div>
        <div className="deleteButton">
          <Button
            size="small"
            onClick={() => handleDeleteTask()}
          >
            <FontAwesomeIcon color="white" icon={faToilet} />
          </Button>
        </div>
      </div>
    </PatchStyles>
  );
};
