import { createBrowserRouter } from "react-router-dom";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminPage from "./views/Admin/AdminPage";

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
        path: "/Admin",
        element: <AdminPage />,
    },
]);

export default router;
