import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import './Form.css';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        go: false
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match')
        } else {
            console.log('SUCCESS');
            setFormData({...formData, go: true});
            console.log(formData);
        }
    }

    return (
        <Fragment>
             <NavBar />
                {formData.go ? <Redirect to="/admin" /> : ''}
                <p className="lead lead-margin"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)} >
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChange(e)}
                            />
                    </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p className="lead">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
        </Fragment>
    )
}

export default Register;
