import './App.css';
import './assets/css/login.css';
import './assets/css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Patient from './components/Patient';
function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />} axact></Route>
          <Route path="/dashboard" element={<Dashboard />} axact></Route>
          <Route path="/patient" element={<Patient />} axact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
