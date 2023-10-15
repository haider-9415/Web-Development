import React,{forwardRef} from 'react'
function User(p,r) {
    return (
        <div>
            <input type="text" ref={r} />
        </div>
    )
}
export default forwardRef(User)
