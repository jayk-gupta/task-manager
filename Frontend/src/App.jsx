import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Auth/Register/Register";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
