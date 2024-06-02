import ProtectedRoute from "./ProtectedRoute";
import List from "../pages/List";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routeList = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/profile/:id",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
];
