import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import {router} from './Routes/Routes'

function App() {
  return (
    <div className="w-[1440px] m-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
