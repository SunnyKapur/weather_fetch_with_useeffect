import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Users from '../pages/Users'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"",
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"about",
                    element:<About />
                },
                {
                    path:"products",
                    element:<Products />
                },
                {
                    path:"users",
                    element:<Users />
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes