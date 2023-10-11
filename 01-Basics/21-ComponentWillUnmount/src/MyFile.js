import React from "react";
class Student extends React.Component{
    componentWillUnmount() {
        alert('the Student class component has been removed')
    }
    render() {
        return (
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}
export default Student
