import { useNavigate } from "react-router-dom"
function Home() {
    const nevigate = useNavigate()
    function navToOther(url) {
        nevigate(url)
        nevigate(url)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>this is home page of website</p>
            <br /><br />
            <button onClick={()=> navToOther('/about')} >Go to About Page</button>
            <button onClick={()=> navToOther('/filter')} >Go to Filter Page</button>
        </div>
    )
}
export default Home

