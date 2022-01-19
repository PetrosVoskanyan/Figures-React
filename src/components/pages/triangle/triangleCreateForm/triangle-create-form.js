import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { triangleSlice, pointsSlice } from '../../../../store';
import { Button } from '../../../button/button';
import './triangle-create-form.module.scss';
import { TextField, MenuItem  } from '@mui/material';
import * as classes from './triangle-create-form.module.scss';
import PatchStyles from 'patch-styles';

const DRAFT_TRIANGLE_LIST = {
  pointIds: [],
};

export const TriangleCreateForm = () => {
  const [draftTriangle, setDraftTriangle] = useState(DRAFT_TRIANGLE_LIST);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleClick = () => {
    const triangles = {
      points: draftTriangle.pointIds.map((uid) => points.find((point) => point.uid === uid)),
      name: draftTriangle.pointIds.map((uid) => points.find((point) => point.uid === uid).pointName),
    }
    dispatch(triangleSlice.actions.createTriangle(triangles));
    navigate('..');
  };

  const handleSavePoint = (ev) => {
    const uid = ev.target.value;
    console.log(uid)
    setDraftTriangle({ ...draftTriangle, pointIds: ev.target.value});
    console.log(draftTriangle)
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
            value={draftTriangle.pointIds}
            error={draftTriangle.pointIds.length !== 3}
            helperText={draftTriangle.pointIds.length !== 3 ? 'Please pick 3 points' : ''}
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
            disabled={draftTriangle.pointIds.length === 2}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
