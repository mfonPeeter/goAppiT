import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import WebDevPage from "./pages/Services/WebDev";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services/web-development", element: <WebDevPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
