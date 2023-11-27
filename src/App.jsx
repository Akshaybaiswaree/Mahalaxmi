import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Component/RootLayout/Rootlayout";

import Login from "./Component/Login/login";
import Mainpage from "./Component/Mainpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="mainpage" element={<Mainpage />} />
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
