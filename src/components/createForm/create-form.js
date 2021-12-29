import { Input } from '../input/input';
import { Button } from '../button/button';
import './create-form.scss';
import { useState } from 'react';

 const DRAFT_POINT_LIST = {
  x: '',
  y: '',
  pointName: '',
}

export const  CreateForm = ({ onSave, onCreateClick }) => {

   const [draftPoint, setDraftPoint] = useState(DRAFT_POINT_LIST)

    const handleClick = () => {
      onSave(draftPoint);
      onCreateClick();
    };

  const handleChange = (ev) => {
    const {name, value} = ev.target;
      setDraftPoint({ ...draftPoint , [name]: value,})
  };

    return (
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
            onClick={() => onCreateClick()}
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
    );
}
