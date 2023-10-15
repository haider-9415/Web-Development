import { useSearchParams } from "react-router-dom"
function Filter() {
    const [searchP, setSearchP] = useSearchParams()
    const user = searchP.get('user')
    const age = searchP.get('age')
    const city = searchP.get('city')
    return (
        <div>
            <h3>User: { user}</h3>
            <h3>Age: { age}</h3>
            <h3>City: {city}</h3>
            <button onClick={() => setSearchP({ user: 'haider', age: 21, city: 'Lucknow' })}>Set Default</button>
            <br /><br />
            <input type="text" onChange={(e) => setSearchP({ text: e.target.value })} Placeholder='text for your query'/>
        </div>
    )
}
export default Filter
