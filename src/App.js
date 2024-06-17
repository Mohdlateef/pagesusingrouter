import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Movie from './Components/Movie';
import Page1 from './Components/page1';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/page1' element={<Page1/>}/>
    <Route path='/movie' element={<Movie/>}/>



   </Routes>
    </div>
  );
}

export default App;
