import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form action="" className="registerForm">
            <label>Username</label>
                <input type="text"
                    className="registerInput"
                    placeholder="Enter your username..." />
                <label>Email</label>
                <input type="text"
                    className="registerInput"
                    placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password"
                    className="registerInput"
                    placeholder="Enter your password..." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
            <Link className="link" to="/login">Login</Link>
        </div>
    )
}
