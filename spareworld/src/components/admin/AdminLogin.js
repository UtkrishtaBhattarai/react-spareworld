import React, { Fragment } from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom';
import {
    Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'

class LogCom extends React.Component {
    state = {}
    render() {
        return (
            <Container>
                <h2>Sign In</h2>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input type='text' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                        </FormGroup>
                    </Col>
                    <Button color="primary" onClick={this.submitForm} type="submit">Submit</Button>
                    <FormText>Not an admin? <Link to='/adminme'> Sign Up here!</Link></FormText>
                </Form>
            </Container>
        );
    }
}

export default LogCom;