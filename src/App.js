import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/login",
          element:<Login />
        },{
          path: "/browse",
          element: <Browse />,
        }
      ]
    }
  ]);
  return (
    <div>
       <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
