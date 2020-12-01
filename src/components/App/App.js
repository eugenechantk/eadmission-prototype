import logo from '../../logo.svg';
import './App.css';
import React from 'react'
import { AppList } from '../AppList/AppList'
import { PersonalCard } from '../PersonalCard/PersonalCard'
import { Greeting } from '../Greeting/Greeting'
import { NavBar } from '../NavBar/NavBar'

class Program {
  constructor(level,name,deadline,progress,app_id){
    this.level = level
    this.name = name
    this.deadline = new Date(deadline[0],deadline[1]-1,deadline[2])
    this.progress = progress
    this.app_id = app_id
  }
}

const program_bach = new Program('bachelor','Chinese Language and Literature',[2020,12,4],0.2,'10021')
const program_taughtPG = new Program('taught-post-grad','Physiotherapy - Master (Full-time)',[2020,12,2],2,'20013')
const program_researchPG = new Program('research-post-grad','Energy Materials and Devices (DPhil. Full-time)',[2020,12,2],0.34,'30145')

const applications = [program_bach,program_taughtPG,program_researchPG]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.dueAppsThisWeek = this.dueAppsThisWeek.bind(this)
    this.logoutHandleClick = this.logoutHandleClick.bind(this)
  }
  
  dueAppsThisWeek (apps) {
    let curr = new Date()
    let weekStart = new Date(curr - (curr.getDay() <= 0 ? 7 : curr.getDay())*86400000)
    let weekEnd = new Date(weekStart.getTime() + 6*86400000)
    return apps.filter(app => (app.deadline.getTime() <= weekEnd && app.deadline.getTime() > weekStart && app.progress < 1)).length
  }

  logoutHandleClick () {
    console.log('Logging out')
  }
  
  render (){
    return (
      <div className="App">
        <NavBar onClick={this.logoutHandleClick}/>
        <Greeting numOfApp={this.dueAppsThisWeek(applications)}/>
        <PersonalCard profileID='12345'/>
        <AppList category="application in progress" applications={applications.filter(app => app.progress < 1)} />
        <AppList category="submitted applications" applications={applications.filter(app => app.progress >= 1)} />
      </div>
    );
  }
  
}

export default App;
