import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Component/RootLayout/Rootlayout";

import Login from "./Component/Login/Login";
import Mainpage from "./Component/Mainpage";
import Home from "./Component/Home/Home";
import AndarBahar from "./Component/Home/Games/Andarbahar";
import SignUP from "./Component/Login/SignUP";

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route>
      <Route index element={<Login />} />
      <Route path="SignUp" element={<SignUP />} />
      <Route path="SignUp" element={<Login/>}></Route>

      <Route path="/" element={<RootLayout />}>
        <Route path="mainpage" element={<Mainpage />} />
        <Route path="home" element={<Home />} />
        <Route path="andarbahar" element ={< AndarBahar />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
