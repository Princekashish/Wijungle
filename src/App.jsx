import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

const route = createBrowserRouter([{ path: "/", Component: Dashboard }]);

function App() {
  return (
    <div className="">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
