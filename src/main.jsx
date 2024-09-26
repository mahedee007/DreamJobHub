import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/applied",
        element: <Applied/>,
      },
     {
      path: "/blogs",
      element: <Blogs/>,
     }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
