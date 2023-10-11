import './App.css';
import './style.css'
import style from './user.module.css'
function App() {
    return (
      <div className='App'>
        {/* method-1 */}
        <h1 className={style.method}>Style: Method-1</h1>

        {/* method-2 */}
        <h1 style={{ backgroundColor: 'blanchedalmond', color: 'purple', margin: '20px' }}>Style: Method-2</h1>
        
        {/* method-3 */}
        <h1 className={style.method}>Style: Method-3</h1>
      </div>
    )
}
export default App;
