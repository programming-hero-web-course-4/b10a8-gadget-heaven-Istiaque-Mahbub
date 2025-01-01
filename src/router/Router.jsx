import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import ViewDetails from "../Component/Details/ViewDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('./fakeDataButton.json')
        },
       
        {
            path:'/category/:id',
            element:<ViewDetails></ViewDetails>,
            loader:()=>fetch('../fakeData.json')
        },
       
      ]
    },
  ]);