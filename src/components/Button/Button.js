import React from 'react'
import next from './next.png'
import './Button.css'

export class Button extends React.Component {
    render() {
        return (
            <button className='appBtn' type="button" onClick={this.props.onClick}>
                <img src={next} alt='click to application'></img>
            </button>
        )
    }
}