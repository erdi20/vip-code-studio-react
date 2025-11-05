import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import LoginPage from "../Pages/login";
import RegisterPage from "../Pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
