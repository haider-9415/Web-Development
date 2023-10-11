import React from "react";
class User extends React.Component{
    constructor() {
        super()
        this.state = {
            email: 'haider@gmail.com'
        }
    }
    render() {
        console.log('this is rnder method')
        return (
            <div>
                {/* <h1>Name: {this.props.name}</h1> */}
                <h1>Email: {this.state.email}</h1>
                <button onClick={()=> this.setState({email: 'harry@gmail.com'})}>Update Email</button>
            </div>

        )
    }
}
export default User
