import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { circleSlice, pointsSlice } from '../../../../store';
import { Input } from '../../../input/input';
import { Button } from '../../../button/button';
import './circle-create-form.models.scss';
import { TextField, MenuItem  } from '@mui/material';
import * as classes from './circle-create-form.models.scss';
import PatchStyles from 'patch-styles';

const DRAFT_CIRCLE_LIST = {
  center: null,
  radius: '',
};

export const CircleCreateForm = () => {
  const [draftCircle, setDraftCircle] = useState(DRAFT_CIRCLE_LIST);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleClick = () => {
    dispatch(circleSlice.actions.createCircle(draftCircle));
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
              points.map((point) => (
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
            variant="outlined"
            onClick={() => handleClick()}
            disabled={!draftCircle.center || !draftCircle.radius}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
