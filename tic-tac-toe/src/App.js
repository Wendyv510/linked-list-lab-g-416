import React, {Component} from 'react' 
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: ["X","","","O","","","","X",""]
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe 
      </header>
    <div className="Board">
      {this.state.board.map((cell) =>
        <p>{cell}</p> )}
    </div>
    </div>
  );
}
}

export default App;
