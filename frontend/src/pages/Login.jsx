import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please login to your account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Please Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Please Enter your password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Login</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login