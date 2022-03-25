import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...formData,
            [e.target.name] : e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please fill out the following</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            onChange={onChange}
                            value={name}
                            placeholder="Please Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id='email'
                            name='email'
                            onChange={onChange}
                            value={email}
                            placeholder="Please Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            name='password'
                            onChange={onChange}
                            value={password}
                            placeholder="Please Enter your password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password2"
                            className="form-control"
                            id='password2'
                            name='password2'
                            onChange={onChange}
                            value={password2}
                            placeholder="Please confirm your password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register