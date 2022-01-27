import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Input: {
    cursor: 'text',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: [theme.spacing(0), theme.spacing(1), theme.spacing(0.5)],
    border: '1px solid #03F4A7FF',
    boxSizing: 'border-box',
    borderRadius: theme.spacing(0.5),
  },
  InputText: {
    color: '#22ab7fff',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: theme.spacing(1.5),
  },
  Axis: {
    color: 'white',
    background: 'none',
    border: 'none',
    outline: 'none',
  },
}));

export const Input = ({ label, ...otherProps }) => {
  const classes = useStyles();
  return (
    <PatchStyles classNames={classes}>
      <label>
        <div className="Input">
          <span className="InputText">{label}</span>
          <input type="text" className="Axis" {...otherProps} />
        </div>
      </label>
    </PatchStyles>
  );
};
