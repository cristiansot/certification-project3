import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

/**
 * Importing other components
 */
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
   <NavBar />
  );
}

export default App

{/* <Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav> */}
  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL.
      Furthermore, notice how the content above always renders? On each page? */}
  {/* <Routes>
    <Route path="/home" element={<home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</div>
</Router> */}