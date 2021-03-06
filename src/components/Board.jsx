import React, {Component, Fragment} from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const array = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return <Square value={this.state.numArr[i]}/>;
  }

  render() {
    const {squares} = this.state;
    const status = 'Next player: X';

    return (<Fragment>
      <div className="status h2 text-center">{status}</div>
      <div className="board">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </Fragment>);
  }
}

export default Board;
