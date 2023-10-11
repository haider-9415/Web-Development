function Student(prop) {
    return (
        <div style={{background:"skyblue", margin:20}}>
            <h1>Name: {prop.name}</h1>
            <h2>Age: {prop.age}</h2>
            <h3>Address: {prop.other.address }  -  Moblie: {prop.other.mobile }</h3>
        </div>
    )
}
export default Student
