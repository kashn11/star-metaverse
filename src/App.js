
import { useEffect } from 'react';
import {
  useRoutes,
} from "react-router-dom";
import './App.css';
import AOS from 'aos';
import Home from './views/home';
import Properties from './views/properties';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/properties", element: <Properties /> },

    // ...
  ]);
  return routes;
}

export default App;
