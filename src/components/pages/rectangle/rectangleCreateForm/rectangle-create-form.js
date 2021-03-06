import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../button/button';
import { MenuItem, TextField } from '@mui/material';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useCreateRectangleMutation, useFetchPointsListQuery } from '../../../../store/services';

const DRAFT_RECTANGLE_LIST = {
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


export const RectangleCreateForm = () => {
  const classes = useStyles();
  const [draftRectangle, setDraftRectangle] = useState(DRAFT_RECTANGLE_LIST);
  const navigate = useNavigate();
  const [createRectangle] = useCreateRectangleMutation();
  const { data: points } = useFetchPointsListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  const handleClick = () => {
    const rectangles = {
      points: draftRectangle.pointIds.map((uid) => points.find((point) => point.uid === uid)),
      name: draftRectangle.pointIds.map((uid) => points.find((point) => point.uid === uid).pointName),
    };

    createRectangle(rectangles);
    navigate('..');
  };

  const handleSavePoint = (ev) => {
    setDraftRectangle({ ...draftRectangle, pointIds: ev.target.value });
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
            value={draftRectangle.pointIds}
            error={draftRectangle.pointIds.length !== 4}
            helperText={draftRectangle.pointIds.length !== 4 ? 'Please pick 4 points' : ''}
          >
            {
              points?.map((point) => (
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
            variant="contained"
            onClick={() => handleClick()}
            disabled={draftRectangle.pointIds.length === 3}
          >
            Save</Button>
        </div>
      </form>
    </PatchStyles>
  );
};
