import React, { Component } from 'react'
class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increamentCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
    return (
        <div>
            <h2>Count: {this.state.count }</h2>
        <button onClick={this.increamentCount}> Click Me</button>
      </div>
    )
  }
}
export default ClassCounter
