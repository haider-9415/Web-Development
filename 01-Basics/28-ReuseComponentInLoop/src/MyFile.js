// function Alert() {
//     alert('this is button')
// }

function User(props) {
    return (
        <div style={{margin:'10px',padding:'15px', background:'#666', fontSize:'20px', color:'white'}}>
            <span style={{margin:'10px'}}>{props.data.name }</span>
            <span style={{margin:'10px'}}>{props.data.email }</span>
            <span style={{ margin: '10px' }}>{props.data.contact}</span>

            {/* <button onClick={()=>Alert()} style={{margin:'10px'}}> {props.data.contact }</button> */}

            {/* the following button will create a loop  */}
            {/* <button onClick={props.button}>click me</button> */}
            
        </div>
    )
}
export default User
