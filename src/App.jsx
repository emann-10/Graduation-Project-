import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import AllProducts from './Pages/AllProducts/AllProducts'
import Contacts from './Pages/Contacts/Contacts'
import AppProvider from "./Context/AppContext";
import Users from './Pages/Users/Users'
import Register from './Components/Register/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <AllProducts />,
        },
        {
          path: "contacts",
          element: <Contacts></Contacts>
        },
        {
          path: "users",
          element: <Users></Users>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: `*`,
          element: <NotFound></NotFound>
        },

      ],
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  );
}
export default App
