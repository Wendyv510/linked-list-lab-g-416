import React, {Component} from 'react' 
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: ["","","","","","","","",""]
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/originals/5a/41/af/5a41afc9aea3e975da2533e41f823419.png" className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
}

export default App;
