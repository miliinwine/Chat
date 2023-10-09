import { createHashRouter, RouterProvider } from "react-router-dom";
import { Registration } from "../pages/Registration/Registration";
import {Entrance} from "../pages/Entrance/Entrance"
import {Room} from "../pages/Room/Room"
import './styles/global.css'

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Entrance/>
    },
    {
      path: "/registration",
      element: <Registration />
    },
    {
      path: "/room",
      element: <Room />
    },
  ]);
  return (
    <>
    <div className='line'></div>
    <div className='conteiner'>
      <RouterProvider  router={router}/>
    </div>
    </>
  );
}

export default App;
