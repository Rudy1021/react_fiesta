import ForgetPassWord from '@/components/LoginMain/ForgetPassword/index';
import Login from '@/components/LoginMain/Login/index';
import SignUp from '@/components/LoginMain/SignUp/index';
import Home from '@/pages/Home/index';
import LoginMain from '@/pages/Login/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/signup'} element={<LoginMain />}>
          <Route path={'/signup'} element={<SignUp />}></Route>
        </Route>
        <Route path={'/login'} element={<LoginMain />}>
          <Route path={'/login'} element={<Login />}></Route>
        </Route>
        <Route path={'/forgetpassword'} element={<LoginMain />}>
          <Route path={'/forgetpassword'} element={<ForgetPassWord />}></Route>
        </Route>
        <Route path={'/'} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
