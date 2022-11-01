import React from 'react';
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './pages/Home.pages';
import TopBar from './components/TopBar.components';
import Department from './pages/Department.pages';
function App() {
  return (
    <div className="App">
    <Department/>
    </div>
  );
}

export default App;
