import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Component/RootLayout/Rootlayout";

import Login from "./Component/Login/login";
import Mainpage from "./Component/Mainpage";
import Home from "./Component/Home/Home";
import AndarBahar from "./Component/Home/Games/Andarbahar";
import SignUP from "./Component/Login/SignUP";
import RaceGame from "./Component/Home/Games/RaceGame";
import Roulette from "./Component/Home/Games/Rouette";
import DragonTiger from "./Component/Home/Games/DragonTiger";
import AmarAkbarAnthony from "./Component/Home/Games/AmarAkbarAnthony";
import TeenpattiVirtual from "./Component/Home/Games/TeenpattiVirtual";

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route>
      <Route index element={<Login />} />
      <Route path="SignUp" element={<SignUP />} />
      <Route path="SignUp" element={<Login/>} />
      <Route path= "racegame" element = {<RaceGame/>}/>
      
      


      <Route path="/" element={<RootLayout />}>
        <Route path="mainpage" element={<Mainpage />} />
        <Route path="home" element={<Home />} />
        <Route path="andarbahar" element ={< AndarBahar />} />
        <Route path= "Rouette" element = {<Roulette/>}/>
        <Route path= "DragonTiger" element = {<DragonTiger/>}/>
        <Route path= "AmarAkbarAnthony" element = {<AmarAkbarAnthony/>}/>
        <Route path="TeenpattiVirtual" element = {<TeenpattiVirtual/>}/>

        
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
