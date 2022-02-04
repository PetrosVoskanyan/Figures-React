import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '../Avatar/avatar';
import { Button } from '../../../../button/button';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useDeletePointMutation } from '../../../../../store/services';

const useStyles = makeStyles((theme) => ({
  coordination: {
    border: '1px solid #103153FF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    position: 'relative',
    background: '#001e3cff',
    borderRadius: theme.spacing(1.2),
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


export const PointListItem = ({ point }) => {
  const classes = useStyles();
  const [deletePoint] = useDeletePointMutation();

  const handleDeleteTask = () => {
    deletePoint(point.uid);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="coordination">
        <Avatar text={point.pointName} />
        <span className="coordinationText">Coordinates: (x:{point.x}, y:{point.y})</span>

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
