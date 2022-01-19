import { Input } from '../../../input/input';
import { Button } from '../../../button/button';
import './create-form.models.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pointsSlice } from '../../../../store';
import { useNavigate } from 'react-router-dom';
import * as classes from './create-form.models.scss';
import PatchStyles from 'patch-styles';

 const DRAFT_POINT_LIST = {
  x: '',
  y: '',
  pointName: '',
}

export const  CreateForm = () => {
   const [draftPoint, setDraftPoint] = useState(DRAFT_POINT_LIST)
  const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleClick = () => {
      dispatch(pointsSlice.actions.createPoint(draftPoint));
      navigate('..');
    };

  const handleChange = (ev) => {
    const {name, value} = ev.target;
      setDraftPoint({ ...draftPoint , [name]: value,})
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
              variant="outlined"
              onClick={() => handleClick()}
              disabled={!draftPoint.x || !draftPoint.y || !draftPoint.pointName}
            >
              Save</Button>
          </div>
        </form>
      </PatchStyles>
    );
}
