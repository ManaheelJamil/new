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
import DryFruits from './component/dryFruits/DryFruits'
import Fruits from './component/fruits/Fruits'
import Meat from './component/meat/Meat'
import Oil from './component/oil/Oil'
import SeaFood from './component/seaFood/SeaFood'
import Vegetables from './component/vegetable/Vegetable'
import Additem from "./component/additem/Additem";
import Setting from "./component/Setting/Setting";
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
        {
          path: "/fruits",
          element: <Fruits />,
        },  
        {
          path: "/dryFruits",
          element: <DryFruits />,
        },    
        {
          path: "/meat",
          element: <Meat />,
        },   
        {
          path: "/oil",
          element: <Oil />,
        },    
        {
          path: "/seaFood",
          element: <SeaFood />,
        },   
        {
          path: "/vegetable",
          element: <Vegetables />,
        }, 
        {
          path: "/additem",
          element: <Additem />,
        }, 
        {
          path: "/Setting",
          element: <Setting />,
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
