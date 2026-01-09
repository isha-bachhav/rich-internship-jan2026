import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Todo from "./components/pages/Todo";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
