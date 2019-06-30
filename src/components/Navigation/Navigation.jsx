import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import './Navigation.css'

export class Navigation extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu secondary className='navbar'>
                    <Link to={ROUTES.LANDING}>
                        <Menu.Item 
                            name='home' 
                            active={activeItem === 'home'} 
                            onClick={this.handleItemClick} 
                        />
                    </Link>
                    <Link to={ROUTES.HOME}>
                        <Menu.Item
                            name='participantes'
                            active={activeItem === 'participantes'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to={ROUTES.ACCOUNT}>
                        <Menu.Item
                            name='cursos'
                            active={activeItem === 'cursos'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Menu.Menu position='right' className='mobile-version'>
                    <Link to={ROUTES.ADMIN}>
                        <Menu.Item
                            name='staff'
                            active={activeItem ==='staff'}
                            onClick={this.handleItemClick}  
                            
                        />
                    </Link>
                    <Link to={ROUTES.SIGN_UP}>
                        <Menu.Item
                            name='regístrate'
                            active={activeItem === 'regístrate'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to={ROUTES.SIGN_IN}>
                        <Menu.Item
                            name='iniciar sesión'
                            active={activeItem === 'iniciar sesión'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Navigation
