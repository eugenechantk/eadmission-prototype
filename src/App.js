import logo from './logo.svg';
import './App.css';
import React from 'react'

class Program {
  constructor(level,name,deadline,progress,app_id){
    this.level = level
    this.name = name
    this.deadline = deadline
    this.progress = progress
    this.app_id = app_id
  }
}

const program_bach = new Program('bachelor','Chinese Language and Literature','30/9/2020','0.2','10021')
const program_taughtPG = new Program('taught post-grad','Physiotherapy - Master (Full-time)','30/9/2020','2','20013')
const program_researchPG = new Program('research post-grad','Energy Materials and Devices (DPhil. Full-time)','30/8/2020','0.34','30145')

applications = [program_bach,program_taughtPG,program_researchPG]

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
