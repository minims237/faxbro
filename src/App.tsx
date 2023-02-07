import React from 'react';
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Department from './pages/Department.pages';
import TopBar from './components/TopBar.components';
function App() {
  return (
    <div className="app">
    <TopBar/>
    <Department/>
    </div>
  );
}

export default App;
