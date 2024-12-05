import { createBrowserRouter } from "react-router-dom";

import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetail from "../Pages/NewsDetails/NewsDetail";
import PrivateRoute from "./Privateroute/PrivateRoute";




const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('../news.json')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])
export default routes