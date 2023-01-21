
import './App.css';
import  { Toaster } from 'react-hot-toast';
import { router } from './routes/routes';
import {RouterProvider} from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
