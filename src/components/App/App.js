import logo from '../../logo.svg';
import './App.css';
import React from 'react'
import { AppList } from '../AppList/AppList'
import { PersonalCard } from '../PersonalCard/PersonalCard'

class Program {
  constructor(level,name,deadline,progress,app_id){
    this.level = level
    this.name = name
    this.deadline = new Date(deadline[0],deadline[1],deadline[2])
    this.progress = progress
    this.app_id = app_id
  }
}

const program_bach = new Program('bachelor','Chinese Language and Literature',[2020,8,30],0.2,'10021')
const program_taughtPG = new Program('taught-post-grad','Physiotherapy - Master (Full-time)',[2020,8,30],2,'20013')
const program_researchPG = new Program('research-post-grad','Energy Materials and Devices (DPhil. Full-time)',[2020,7,31],0.34,'30145')

const applications = [program_bach,program_taughtPG,program_researchPG]

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <PersonalCard />
        <AppList category="application in progress" applications={applications.filter(app => app.progress < 1)} />
        <AppList category="submitted applications" applications={applications.filter(app => app.progress >= 1)} />
      </div>
    );
  }
  
}

export default App;
