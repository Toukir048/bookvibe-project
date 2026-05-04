import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {index: true , Component: Homepage},
            {path:"/about" , Component: About}
        ]
    }
])

export default router