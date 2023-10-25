import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import UserLogin from './components/UserLogin';
import UserSignOut from './components/UserSignOut';
import Settings from "./components/Settings";
import Authenticated from './components/Authenticated';
import NotFound from './components/NotFound';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<UserSignUp />} />
        <Route path="signout" element={<UserSignOut />} />
        <Route element={<PrivateRoute />}>
          <Route path="authenticated" element={<Authenticated />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
};

export default App;
