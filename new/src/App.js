import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
 render()
{
  return (
    
    <div className="App">
      <header className="App-header" id="1">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          PERSONAL INFORMATION
         </a>
        <p className="backend" id="2">{this.state.apiResponse}</p>
        <h1>My name is uzair</h1>
        

      </header>
    </div>
  )
}
}



export default App;
