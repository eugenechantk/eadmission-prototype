import React from 'react'
import './NewAppButton.css'
import plus from './plus.png'

export class NewAppButton extends React.Component {
    render () {
        return (
            <div className='NewAppBtn' onClick={this.props.onClick}>
                <img src={plus} alt='plus'/>
                <h3>Start another application</h3>
            </div>
        )
    }
}