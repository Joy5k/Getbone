import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import ShareButton from './components/ShareButton';
import { router } from './Routes/Routes';


function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
