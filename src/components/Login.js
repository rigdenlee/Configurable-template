import React, { Fragment, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import NavBar from './NavBar';
import './Form.css';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        go: false
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(email && password) {
            setFormData({ ...formData, 
                go: true
            })
        }  
    }

    return (
        <Fragment>
            {formData.go ? <Redirect to="/admin" /> : ''}
            <NavBar />
                <p className="lead lead-margin"><i className="fas fa-user"></i>Sign Into Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={e => onChange(e)}
                            />
                    </div>
                        <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                <p className="lead">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
        </Fragment>
    )
}


export default withRouter(Login);

