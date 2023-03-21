import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    }
])
const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes;