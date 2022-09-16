
import './App.css';
import Header from "./components/header/Header"
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Login from './components/Screens/Login/Login';
import Landing from './components/Screens/Landing/Landing';
import Register from './components/Screens/Register/Register'
import Mynotes from './components/Screens/MyNotes/Mynotes'
import Adminhome from './components/Screens/Landing/Adminhome';
import Adminlogin from './components/Screens/Login/Adminlogin';
import Edituser from './components/Screens/Landing/Edituser';


const App=()=> {
 return(
 
  <Router>
  {/* <Header/> */}
  <main>
    
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
         <Route path='/notes' element={<Mynotes />}></Route>
         <Route path='/adminHome' element={<Adminhome/>}></Route>
         
         <Route path='/admin' element={<Adminlogin/>}></Route>
         <Route path='/edit/:userId' element={<Edituser/>}></Route>
    </Routes>
    
  </main>
    </Router>
    
 )
}

export default App;
