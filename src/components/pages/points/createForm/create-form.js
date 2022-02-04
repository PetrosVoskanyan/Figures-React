import { Input } from '../../../input/input';
import { Button } from '../../../button/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useCreatePointMutation } from '../../../../store/services';
import genUid from 'light-uid';

const DRAFT_POINT_LIST = {
  x: '',
  y: '',
  pointName: '',
};

const useStyles = makeStyles((theme) => ({
  CreateForm: {
    margin: [theme.spacing(2), theme.spacing(0)],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InputContainer: {
    gap: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ActionContainer: {
    gap: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const CreateForm = () => {
  const classes = useStyles();
  const [draftPoint, setDraftPoint] = useState(DRAFT_POINT_LIST);
  const [createPoint] = useCreatePointMutation();
  const navigate = useNavigate();

  const handleClick = () => {
    createPoint({ ...draftPoint, uid: genUid() });
    navigate('..');
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setDraftPoint({ ...draftPoint, [name]: value });
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="CreateForm">
        <div className="InputContainer">
          <Input
            value={draftPoint.x}
            name="x"
            type="text"
            label="x axis"
            autoComplete="off"
            onChange={handleChange}
          />
          <Input
            value={draftPoint.y}
            name="y"
            type="text"
            label="y axis"
            autoComplete="off"
            onChange={handleChange}
          />
          <Input
            value={draftPoint.pointName}
            name="pointName"
            type="text"
            label="pointName"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>

        <div className="ActionContainer">
          <Button
            size="big"
            onClick={() => navigate('..')}
          >
            CANCEL</Button>
          <Button
            size="big"
            variant="contained"
            onClick={() => handleClick()}
            disabled={!draftPoint.x || !draftPoint.y || !draftPoint.pointName}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
