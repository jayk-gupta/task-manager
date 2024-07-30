import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="bg-white h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
