import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/404';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='user/:userId' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
