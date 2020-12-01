import React from 'react'
import './NavBar.css'
import PolyU from './polyu_logo.png'
import logout from './logout.png'

export class NavBar extends React.Component {
    render () {
        return (
            <div className='NavBar'>
                <img className='logo' src={PolyU} alt='PolyU' />
                <img className='logoutIcon' onClick={this.props.onClick} src={logout} alt='logout' />
            </div>
        )
    }
}