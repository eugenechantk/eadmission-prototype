import React from 'react'
import './PersonalCard.css'
import { Button } from '../Button/Button'

export class PersonalCard extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('link to personal info: ' + this.props.profileID)
    }
    
    render () {
        return (
            <div className='PersonalCardParent'>
                <div className='PersonalCard'>
                    <div className='PersonalCardInfo'>
                        <h2>Personal Information</h2>
                        <p>Let us get to know you...</p>
                    </div>
                    <Button onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}