import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Details } from './pages/details/Details';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurant/:ID" element={<Details/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
