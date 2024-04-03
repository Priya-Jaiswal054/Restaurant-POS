import React, { useEffect, useState } from "react";
import axios from "axios";

const TableContext = React.createContext();

const TableContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);
  // console.log(data);
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/api/getOrder')
  //   .then((response)=>{
  //     // console.log(response.data.data)
  //     setOrder(response.data.data)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  //   },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getOrder");
        setOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TableContext.Provider
      value={{ data, setData, user, setUser, order, setOrder }}
    >
      {children}
    </TableContext.Provider>
  );
};
export { TableContext };

export default TableContextProvider;
