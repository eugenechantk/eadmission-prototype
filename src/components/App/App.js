import logo from './logo.svg';
import './App.css';
import React from 'react'
import { AppCard } from '../AppCard/AppCard'

class Program {
  constructor(level,name,deadline,progress,app_id){
    this.level = level
    this.name = name
    this.deadline = deadline
    this.progress = progress
    this.app_id = app_id
  }
}

const program_bach = new Program('bachelor','Chinese Language and Literature',deadline = new Date(2020,8,30),0.2,'10021')
const program_taughtPG = new Program('taught post-grad','Physiotherapy - Master (Full-time)',deadline = new Date(2020,8,30),2,'20013')
const program_researchPG = new Program('research post-grad','Energy Materials and Devices (DPhil. Full-time)',deadline = new Date(2020,7,31),0.34,'30145')

applications = [program_bach,program_taughtPG,program_researchPG]

class App extends React.Component {
  render (){
    return (
      <div className="App">
        {applications.map(app => <AppCard program={app}/>)}
      </div>
    );
  }
  
}

export default App;
