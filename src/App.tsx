import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='bg-orange-50'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
