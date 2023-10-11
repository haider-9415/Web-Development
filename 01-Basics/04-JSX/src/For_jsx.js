import React from "react"
function JSX() {
    return (
        <div>
            <h1>Hey, this is JSX</h1>
            <p>{100 + 200 + 300 - 300 }</p>
        </div>
    )
    // return React.createElement('div',null,'this is react without JSX')
    // return React.createElement('div',null,React.createElement('h1',null,'this is h1 tag'))
}
export default JSX
