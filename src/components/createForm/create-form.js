import { Input } from '../input/input';
import { Button } from '../button/button';
import './create-form.scss';
import { Component } from 'react';

export class CreateForm extends Component {

  state = {
    x: '',
    y: '',
    pointName: '',
  };

  render() {
    const handleClick = () => {
      this.props.onSave(this.state);
      this.props.onCreateClick();
    };

    return (
      <form className="CreateForm">
        <div className="InputContainer">
          <Input
            name="x"
            type="text"
            label="x axis"
            autocomplete="off"
            onChange={this.handleChange}
          />
          <Input
            name="y"
            type="text"
            label="y axis"
            autocomplete="off"
            onChange={this.handleChange}
          />
          <Input
            name="pointName"
            type="text"
            label="pointName"
            autocomplete="off"
            onChange={this.handleChange}
          />
        </div>

        <div className="ActionContainer">
          <Button
            size="big"
            onClick={() => this.props.onCreateClick()}
          >
            CANCEL</Button>
          <Button
            size="big"
            variant="outlined"
            onClick={() => handleClick()}
            disabled={!this.state.x || !this.state.y || !this.state.pointName}
          >
            Save</Button>
        </div>
      </form>
    );
  }

  handleChange = (ev) => {
    const axis = ev.target.value;
    const axisName = ev.target.name;

    this.setState({
      [axisName]: axis,
    });
  };
}
