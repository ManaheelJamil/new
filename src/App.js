import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./component/SignUp/signup";
import Login from "./component/login/Login";
import Landingpage from "./component/landingpage/landingpage";
import Home from './component/home/Home'
import AdminPanel from './component/AdminPanel'
import Sale from "./component/sale/Sale";
import Purchase from "./component/purchase/Purchase";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Header />,
      children:[
        {
          path: "/",
          element: <Landingpage />,
        },
        {
          path: "/login",
          element: <Login />,
        },  
        {
          path: "/signup",
          element: <SignUp />,
        },    
        {
          path: "/home",
          element: <Home />,
        },   
        {
          path: "/AdminPanel",
          element: <AdminPanel />,
        },    
        {
          path: "/sale",
          element: <Sale />,
        },   
        {
          path: "/purchase",
          element: <Purchase />,
        },    
      ]
    },
  ]);
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
