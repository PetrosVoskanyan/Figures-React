import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pointsSlice, triangleSlice } from '../../../../store';
import { Button } from '../../../button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const DRAFT_TRIANGLE_LIST = {
  pointIds: [],
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


export const TriangleCreateForm = () => {
  const classes = useStyles();
  const [draftTriangle, setDraftTriangle] = useState(DRAFT_TRIANGLE_LIST);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const points = useSelector(pointsSlice.selectors.selectAll);

  const handleClick = () => {
    const triangles = {
      points: draftTriangle.pointIds.map((uid) => points.find((point) => point.uid === uid)),
      name: draftTriangle.pointIds.map((uid) => points.find((point) => point.uid === uid).pointName),
    };
    dispatch(triangleSlice.actions.createTriangle(triangles));
    navigate('..');
  };

  const handleSavePoint = (ev) => {
    const uid = ev.target.value;
    console.log(uid);
    setDraftTriangle({ ...draftTriangle, pointIds: ev.target.value });
    console.log(draftTriangle);
  };


  return (
    <PatchStyles classNames={classes}>
      <form className="CreateForm">
        <div className="InputContainer">
          <TextField
            onChange={handleSavePoint}
            label="Vertex"
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
