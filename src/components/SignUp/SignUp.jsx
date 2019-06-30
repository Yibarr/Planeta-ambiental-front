import React, { Component } from 'react'
import { Button, Form, Grid, Segment, } from 'semantic-ui-react'

import './SignUp.css'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const cursos = [
    { key: 'robotica', text: 'Robótica', value: 'robotica' },
    { key: 'verano', text: 'Curso de verano', value: 'verano' },
    { key: 'pintura', text: 'Pintura', value: 'pintura' },
  ]


  

export class SignUp extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render() {
        const { value } = this.state
        return (
            <div>
                <Grid className='form-container' columns='equal'>
                    <Grid.Column className='mobile-version'>
                    </Grid.Column>
                    <Grid.Column  mobile={12} computer={8}>
                    <Segment>
                    <h2 className='signup-label'>Regístrate</h2>
                    <Form  className='SignUp'>
                        <Form.Group widths='equal' className='SignUp'>
                            <div className='centero'>
                                <Form.Input  label='Nombre' placeholder='Nombre'/>
                                <Form.Input  label='Apellido' placeholder='Apellido' />
                                <Form.Select className='gender'  label='Género' options={options} placeholder='Género' />
                            </div>
                        </Form.Group>
                        <Form.Group inline className='centero'>
                            <label>Talla de playera</label>
                            <Form.Radio
                                label='Chica'
                                value='sm'
                                checked={value === 'sm'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label='Mediana'
                                value='md'
                                checked={value === 'md'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label='Grande'
                                value='lg'
                                checked={value === 'lg'}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <div className='centero'>
                                <Form.Field>
                                <label>Email</label>
                                <input className='input-signup' placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                <label>contraseña</label>
                                <input className='input-signup' placeholder='Password' type='password' />
                                </Form.Field>
                                <Form.Field>
                                <label>Confirma tu contraseña</label>
                                <input className='input-signup' placeholder='Password' type='password' />
                                </Form.Field>

                            </div>
                        </Form.Group>
                        <Form.Group className='centero'>
                            <Form.Select fluid label='Curso' options={cursos} placeholder='Curso al que ingresa' />
                        </Form.Group>
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

export default SignUp
