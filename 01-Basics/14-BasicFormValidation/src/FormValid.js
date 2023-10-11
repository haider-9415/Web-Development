import React, { useState } from "react";
function Login() {
    const [userID, setUserID] = useState(false)
    const [password, setPassword] = useState("")
    const [userIDError, setUserError] = useState(false)
    const [passError, setPassError]  = useState(false)
    function loginHandler(e) {
        e.preventDefault()
        if (userID.length<5 ||password.length<5) {
            alert('Enter correct UserID or Password')
        } else {
            alert('Welcome to our website :)')
        }
    }
    function userIDHandler(e) {
        let IDLength = e.target.value.length
        IDLength < 5 || IDLength > 10 ? setUserError(true) : setUserError(false)
        setUserID(e.target.value)
    }
    function PasswordHandler(e) {
        let IDLength = e.target.value.length
        IDLength < 5 || IDLength > 10 ? setPassError(true) : setPassError(false)
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={loginHandler}>
            <h1>Login</h1>
                <input type="text" placeholder="User ID" onChange={userIDHandler} /><br/>{userIDError ? <span>ID must be 5-10</span>: ""}
            <br /><br />
            <input type="text" placeholder="Password" onChange={PasswordHandler}/><br/>{passError ? <span>Password must be 5-10</span>: ""}
            <br /><br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login
