import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Github from './Github';
import Ntwist from './Ntwist';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "github",
    element: <Github />
  },
  {
  path: "ntwist",
  element: <Ntwist />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
