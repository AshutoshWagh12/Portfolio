import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactAndResume from "./Routes/ContactAndResume/ContactAndResume.jsx";
import Accomplishments from "./Routes/Accomplishment/Accomplishments.jsx";
import { Provider } from "react-redux";
import portfolioStore from "./Store/index.js";
import Home from "./Routes/Home/Home.jsx";
import Projects from "./Routes/Projects/Projects.jsx";
import Experience from "./Routes/Internships/Experience.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Accomplishments", element: <Accomplishments /> },
      { path: "/Experience", element: <Experience /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <ContactAndResume /> },
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={portfolioStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
