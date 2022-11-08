
import './App.css';
import  { Toaster } from 'react-hot-toast';
import { router } from './routes/routes';
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
