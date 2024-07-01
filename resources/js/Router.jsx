import { createBrowserRouter } from "react-router-dom";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminHome from "./views/Admin/AdminHome";
import AdminArticle from "./views/Admin/AdminArticle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/Admin/Home",
        element: <AdminHome />,
    },
    {
        path: "/Admin/Article",
        element: <AdminArticle/>,
    },
]);

export default router;
