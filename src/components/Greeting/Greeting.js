import React from 'react'
import './Greeting.css'

export class Greeting extends React.Component {
    render () {
        return (
            <div className="GreetingContainer">
                <h1>Welcome Back!</h1>
                <p>You have <span>{this.props.numOfApp} applications</span> due this week</p>
            </div>
        )
    }
}