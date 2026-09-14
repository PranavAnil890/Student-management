import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Register from './component/Register';
import Login from './component/Login';
import Table1 from './component/Table1';
import Feedback from './component/Feedback';
import Update from './component/Update';
import ProtectRoute from './component/ProtectRoute';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(
localStorage.getItem('isLoggedIn') === 'true'
);

return (
<> <Navbar
     isLoggedIn={isLoggedIn}
     setIsLoggedIn={setIsLoggedIn}
   />


  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route
      path='/login'
      element={<Login setIsLoggedIn={setIsLoggedIn} />}
    />
    <Route path='/register' element={<Register />} />

    <Route
      path='/table1'
      element={
        <ProtectRoute>
          <Table1 />
        </ProtectRoute>
      }
    />

    <Route
      path='/feedback'
      element={
        <ProtectRoute>
          <Feedback />
        </ProtectRoute>
      }
    />

    <Route
      path='/update/:rollnumber'
      element={
        <ProtectRoute>
          <Update />
        </ProtectRoute>
      }
    />
  </Routes>
</>


);
}

export default App;
