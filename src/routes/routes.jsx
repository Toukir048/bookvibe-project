import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import ErrorPage from "../pages/errorpage/ErrorPage";
import ListedBooks from "../pages/books/ListedBooks";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children:[
            {index: true , Component: Homepage},
            {path:"/about" , Component: About},
            {path:"/listed-books" , Component: ListedBooks},
        ],
        errorElement:<ErrorPage/>
    },
    
])

export default router