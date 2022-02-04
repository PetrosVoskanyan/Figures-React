import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../input/input';
import { Button } from '../../../button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useCreateCircleMutation, useFetchPointsListQuery } from '../../../../store/services';
import genUid from 'light-uid';

const DRAFT_CIRCLE_LIST = {
  center: null,
  radius: '',
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
  'MuiSelect-multiple': {
    color: '#03f4a7 !important',
  },
  'Mui-focused': {
    color: '#03f4a7 !important',
  },
  'MuiOutlinedInput-notchedOutline': {
    borderColor: '#03f4a7 !important',
  },
  'css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
    color: '#03f4a7 !important',
  },
}));

export const CircleCreateForm = () => {
  const classes = useStyles();
  const [draftCircle, setDraftCircle] = useState(DRAFT_CIRCLE_LIST);
  const navigate = useNavigate();
  const { data: points } = useFetchPointsListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });
  const [createCircle] = useCreateCircleMutation();


  const handleClick = () => {
    createCircle({ ...draftCircle, uid: genUid() });
    navigate('..');
  };

  const handleSavePoint = (ev) => {
    console.log(ev, 'center');
    const uid = ev.target.value;
    setDraftCircle({ ...draftCircle, center: points.find((point) => uid === point.uid) });
  };

  const handleChange = (ev) => {
    console.log(ev, 'radius');
    const { name, value } = ev.target;
    setDraftCircle({ ...draftCircle, [name]: value });
  };

  return (
    <PatchStyles classNames={classes}>
      <form className="CreateForm">
        <div className="InputContainer">
          <TextField className="select" onChange={handleSavePoint} select>
            {
              points?.map((point) => (
                <MenuItem key={point.uid} value={point.uid}>{point.pointName} ({point.x}, {point.y})</MenuItem>
              ))
            }
          </TextField>
          <Input
            value={draftCircle.radius}
            name="radius"
            type="text"
            label="radius"
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
            disabled={!draftCircle.center || !draftCircle.radius}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
