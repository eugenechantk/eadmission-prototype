import React from 'react'
import './PersonalCard.css'
import { Button } from '../Button/Button'

export class PersonalCard extends React.Component {
    render () {
        return (
            <div className='PersonalCard'>
                <div className='PersonalCardInfo'>
                    <h2>Personal Information</h2>
                    <p>Let us get to know you...</p>
                </div>
                <Button />
            </div>
        )
    }
}