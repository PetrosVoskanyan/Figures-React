import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pointsSlice, rectangleSlice } from '../../../../store';
import { Button } from '../../../button/button';
import { TextField, MenuItem  } from '@mui/material';
import * as classes from './rectangle-create-form.models.scss';
import PatchStyles from 'patch-styles';

const DRAFT_RECTANGLE_LIST = {
  pointIds: [],
};

export const RectangleCreateForm = () => {
  const [draftRectangle, setDraftRectangle] = useState(DRAFT_RECTANGLE_LIST);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleClick = () => {
    const rectangles = {
      points: draftRectangle.pointIds.map((uid) => points.find((point) => point.uid === uid)),
      name: draftRectangle.pointIds.map((uid) => points.find((point) => point.uid === uid).pointName),
    }

    dispatch(rectangleSlice.actions.createRectangle(rectangles));
    navigate('..');
  };

  const handleSavePoint = (ev) => {
    setDraftRectangle({ ...draftRectangle, pointIds: ev.target.value});
  };


  return (
    <PatchStyles classNames={classes}>
      <form className='CreateForm'>
        <div className="InputContainer">
          <TextField
            onChange={handleSavePoint}
            label='Vertex'
            select
            SelectProps={{
              multiple: true,
            }}
            value={draftRectangle.pointIds}
            error={draftRectangle.pointIds.length !== 4}
            helperText={draftRectangle.pointIds.length !== 4 ? 'Please pick 4 points' : ''}
          >
            {
              points.map((point) => (
                <MenuItem key={point.uid} value={point.uid}>{point.pointName} ({point.x}, {point.y})</MenuItem>
              ))
            }
          </TextField>
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
            disabled={draftRectangle.pointIds.length === 3}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
