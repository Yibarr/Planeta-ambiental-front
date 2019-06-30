import React, { Component } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

import './SignIn.css'


export class SignIn extends Component {
    render() {
        return (
            <div>
                <Grid className='form-container' columns='equal'>
                    <Grid.Column className='mobile-version'>
                    </Grid.Column>
                    <Grid.Column  mobile={12} computer={8}>
                    <Segment>
                    <h2 className='login-label'>Inicia Sesión</h2>
                    <Form  className='SignIn'>
                        <Form.Field>
                        <label>Email</label>
                        <input className='input' placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                        <label>Contraseña</label>
                        <input className='input' placeholder='COntraseña' type='password' />
                        </Form.Field>
                        <Button  type='submit'>Enviar</Button>
                    </Form>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column className='mobile-version'>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignIn
