const LoginForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;