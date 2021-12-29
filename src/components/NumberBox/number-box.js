import './number-box.scss';
import { Component } from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';

export class NumberBox extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <div className="numberBox">
        <Button onClick={() => this.subtract()}>-</Button>
          <Input value={this.state.number}/>
        <Button onClick={() => this.sum()}>+</Button>
      </div>
    );
  }
  sum() {
    this.setState({
      number: this.state.number + 1,
      })
  }

  subtract() {
    this.setState({
      number: this.state.number - 1,
    })
  }
}
