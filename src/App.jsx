import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h1>Hello from the Main Page of the app</h1>
      <p>Here are some links to other pages</p>
      <nav>
        <ul>
          <li>
            <p><a href='profile'>Profile Page(Normal A Link)</a></p>
            <p><Link to='profile'>Profile Page(Link component)</Link></p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
