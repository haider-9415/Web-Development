import React from "react";
export default class Students extends React.Component{
    render() {
        return (
            <div style={{background:'skyblue', margin:30}}>
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age }</h2>
                <h3>Address: {this.props.other.address} - Mobile: {this.props.other.mobile}</h3>

            </div>
        )
    }
}