import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


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
       <Provider store={appStore}>
       <RouterProvider router={appRouter}></RouterProvider>
       </Provider>
    </div>
  );
}

export default App;
