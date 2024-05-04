import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import FrontPage from './pages/FrontPage';
import Mail from './pages/Mail';
import Group from './pages/Group';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<FrontPage/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/new-account' element={<Register />} />
        <Route path='/mail' element={<Mail />} />
        <Route path='/my-group' element={<Group />} />
      </Routes>
      </div>
    </Router>

  );
}

export default App;
