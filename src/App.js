
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';


import Student from './pages/Student';
import Login from './components/Login';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes> 
    {/* <Route path='/' exact element={<Login/>}/> */}
    <Route path='/' exact element={<Home/>}/>
    
    <Route path='/about' exact element={<About/>}/>
    <Route path='/student' exact element={<Student/>}/>
   
   </Routes>
   </BrowserRouter>
   </>
//  <HeaderComponent/>
  );
}


export default App;
