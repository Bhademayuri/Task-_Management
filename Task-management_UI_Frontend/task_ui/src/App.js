

import './App.css';
import Navbar from './component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import AddTask from './component/AddTask';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/'element={<Home />}></Route>
    <Route path='/addTask' element={<AddTask /> } ></Route>
    <Route path='/editTask/:id' element={<editTask /> } ></Route>
    </Routes>
    </>
    
    
  );
}

export default App;
