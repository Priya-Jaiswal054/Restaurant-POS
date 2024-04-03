import Dashboard from "./Pages/Dashboard";
import POS from "./Pages/POS";
import Navbar from "./Pages/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import Orders from "./Pages/Orders";
import Table from "./Pages/Table";
import General from "./Components/General";
import Taxes from "./Components/Taxes";
import Discount from "./Components/Discount";
import TableContextProvider from "./Context/TableContextProvider";
import Users from "./Pages/Users";
import OrderTable from "./Pages/OrderTable";
import OrderHistory from "./Pages/OrderHistory";
import FoodTable from "./Pages/FoodTable";
import FoodItem from "./Pages/FoodItem";
import Kitchen from "./Pages/Kitchen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/POS/:id",
          element: <POS />,
        },
        {
          path: "/POS/",
          element: <POS />,
        },
        {
          path: "/orders",
          element: <OrderHistory />,
          // element: <OrderTable />,
          // element:<Orders/>
        },
        {
          path: "/tables",
          element: <Table />,
        },
        {
          path: "/user",
          element: <Users />,
        },
        {
          path: "/general",
          element: <Taxes />,
        },
        {
          path: "/foods",
          element: <FoodTable />,
          // element: <FoodItem />,
        },
        {
          path: "/kitchen",
          element: <Kitchen />,
        },
      ],
    },
  ]);

  return (
    <TableContextProvider>
      <div className="flex">
        <ContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ContextProvider>
      </div>
    </TableContextProvider>
  );
}

export default App;
