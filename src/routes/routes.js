import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import Services from "../components/Services/Services";
import Terms from "../components/Terms/Terms";
import Main from "../layouts/Main";
import ServiceDetails from './../components/ServiceDetails/ServiceDetails';
import Myreviews from './../components/Myreviews/Myreviews';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blogs from './../components/Blogs/Blogs';
import SpinnerRouter from "./SpinnerRouter";
import AddServices from "../components/AddServices/AddServices";


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
          path: "/myreviews/:id",
          element: <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute> ,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
         
          
        },
        {
          path: "/terms",
          element: <Terms></Terms>
         
          
        },
        {
          path:'/services',
          element:<SpinnerRouter><Services></Services></SpinnerRouter> ,
          loader:()=>fetch('http://localhost:5000/services')
        
        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddServices></AddServices> </PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/services')
        
        },
        {
          path:'/myreview',
          element:<PrivateRoute><Myreviews></Myreviews></PrivateRoute> ,
          loader:()=>fetch('http://localhost:5000/review')
        
        },
        {
          path:'/services/:id',
          element:<ServiceDetails></ServiceDetails> ,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

        },
       
        
        {
          path: "/login",
          element: <SpinnerRouter><Login></Login></SpinnerRouter> ,
         
        },
        {
          path: "/register",
          element: <SpinnerRouter><Register></Register></SpinnerRouter> ,
         
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs> ,
         
        },
        
      ],
    },
  ]);
  