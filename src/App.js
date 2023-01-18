import './App.css';
import NavigationBar from './Components/Navigation/navbar';
import Home from './Components/Header/home';
import { Route, Routes } from 'react-router-dom'
import About from './Components/Pages/about';
import Products from './Components/Pages/products';
import { useState } from 'react';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function changeLoginHandler(){
    let name = prompt('Enter your name');
    alert(`Hello ${name}!`)
    setLoggedIn(true);
  }


  
  return (
    <div className='container'>
    <NavigationBar loggedIn={loggedIn} loginClick={changeLoginHandler}/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Pages/about' element={<About />}></Route>
      <Route path='/Pages/products' element={<Products />}></Route>
    </Routes>
    </div>
      );
}

export default App;
