import React from 'react'
import './AppCard.css'
import { Button } from '../Button/Button'

export class AppCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick () {
        console.log('link to this button: ' + this.props.program.app_id)
    };
    
    render(){
        return (
            <div className='AppCard' id={this.props.program.level}>
                <div className="details">
                    <h4>
                        {this.props.program.level === 'bachelor' ? 'Bachelor Degree' : 
                            this.props.program.level === 'taught-post-grad' ? 'Taught Postgraduate' :
                                this.props.program.level === 'research-post-grad' && 'Research Postgraduate'}
                    </h4>
                    <h2>{this.props.program.name}</h2>
                </div>
                <div className='AppCardDetails'>
                    <div className='Deadline'>
                        <h3>{this.props.program.deadline.getDate()}/{this.props.program.deadline.getMonth() + 1}</h3>
                        <p>deadline</p>
                    </div>
                    <div className="Progress">
                        <h3>
                            {this.props.program.progress === 2 ? 'Decision' :
                                this.props.program.progress === 3 ? 'Enrollment' :
                                    this.props.program.progress * 100 + '%'}
                        </h3>
                        <p>{this.props.program.progress === 2 ? 'available' :
                                this.props.program.progress === 3 ? 'completed' :
                                    'done'}
                        </p>
                    </div>
                    <Button className="button" onClick={this.handleClick}/>
                </div>
            </div>
        )
    };
}