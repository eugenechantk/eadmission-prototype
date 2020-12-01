import React from 'react'
import './AppList.css'
import { AppCard } from '../AppCard/AppCard'
import { NewAppButton } from '../NewAppButton/NewAppButton'

export class AppList extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('Start new app button clicked')
    }
    
    render () {
        return (
            <div className="app_list">
                <h1>{this.props.category}</h1>
                <div className="card">
                    {this.props.applications.map((app) => <AppCard program={app} key={app.app_id}/>)}
                </div>
                <div className='newappbutton'>
                    {this.props.category === 'application in progress' && <NewAppButton onClick={this.handleClick}/>}
                </div>
            </div>
        )
    }
}