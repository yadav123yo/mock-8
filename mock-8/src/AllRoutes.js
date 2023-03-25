import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Pages/Admin/Dashboard';
import SignUp from './Pages/user/signup';
import Signin from './Pages/user/signin';
import Movies from './Pages/user/movies';
import Reports from './Pages/Admin/reports';
import Home from './Pages/Home';
import Adminnav from './Components/Adminnav';
import Usernav from './Components/UserNav'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<><Adminnav/> <Login /></>} />
      <Route path="/dashboard" element={<> < Adminnav/> <Dashboard/></>} />
      <Route path="/reports" element={<> < Adminnav/> <Reports /> </>} />
      <Route path="/signup" element={<> <Usernav /><SignUp /> </>} />
      <Route path="/signin" element={<><Usernav/><Signin/></>} />
      <Route path="/movies" element={<><Usernav/><Movies /> </>} />
    </Routes>
  );
};

export default Allroutes;