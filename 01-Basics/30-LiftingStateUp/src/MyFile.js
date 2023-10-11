function User(p) {
    const name = {name:'haider', email:'haider@gmail.com'}
    return (
        <div>
            <h1>User Component</h1>
            <button onClick={ () => p.Alert(name) }>Click Me</button>
        </div>
    )
}
export default User
