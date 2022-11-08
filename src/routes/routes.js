import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Services from "../components/Services/Services";
import Main from "../layouts/Main";
import ServiceDetails from './../components/ServiceDetails/ServiceDetails';


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:5000/services')
          
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>fetch('http://localhost:5000/services')
           
          
          

        },
        {
          path:'/services/:id',
          element:<ServiceDetails></ServiceDetails> ,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        },
       
        
        {
          path: "/login",
          element: <Login></Login> ,
         
        },
        {
          path: "/register",
          element: <Register></Register> ,
         
        },
        
      ],
    },
  ]);
  