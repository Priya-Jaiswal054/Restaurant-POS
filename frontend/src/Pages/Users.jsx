import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import DataTable from "react-data-table-component";
import { userData } from "../Components/SettingData";
import { TableContext } from "../Context/TableContextProvider";

function Users() {
    const { user, setUser } = useContext(TableContext);
  useEffect(() => {
    setUser(userData);
  }, []);
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Status",
      cell: (row) => 
        { return row.status ==="Active"? <div>
            <button
              className="w-[70px] h-[30px] rounded-md bg-green-500 text-white"
              onClick={() => {
                alert(`you want to edit ${row.id}`);
              }}
            >
              Active
            </button>  
          </div>:
          <div>
            <button
              className="w-[70px] h-[30px] rounded-md bg-red-500 text-black"
              onClick={() => {
                alert(`you want to edit ${row.id}`);
              }}
            >
              notActive
            </button>  
          </div>}
    },
    {
      name: "Actions",
      cell:(row) => <DropdownCell user={user} setUser={setUser} row={row} />         
    },
  ];

  const customStyle = {
    rows: {
      style: {
        backgroundColor: "rgb(31 41 55)",
        color: "white",
      },
    },
    headCells: {
      style: {
        backgroundColor: "rgb(3 7 18)",
        color: "white",
      },
    },
    cells: {
      style: {
        borderStyle: "solid",
        borderColor: "rgb(107 114 128)",
        borderWidth: "1px",
      },
    },
    pagination: {
      style: {
        backgroundColor: "rgb(75 85 99)",
        color: "white",
      },
    },
    paginationButton: {
      style: {
        color: "white", // Text color of pagination buttons
        backgroundColor: "white", // Background color of pagination buttons
      },
    },
    header: {
      style: {
        backgroundColor: "rgb(75 85 99)",
        color: "white",
      },
    },
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gray-700">
      <div className="w-full">
        <Navbar />
      </div>
      <div>
        <DataTable
          title="Users"
          columns={columns}
          data={user}
          highlightOnHover
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          customStyles={customStyle}
        />
      </div>
    </div>
  );
}

const DropdownCell = ({ row,user,setUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const deletHandler = (val) =>{
    const confirm = window.confirm("Are you sure you want to delete this row")
    if (confirm) {
      const newData = user.filter((data) =>data.id !== val)
      setUser(newData)
    }
  }
  return (
    <div className="relative">
      <button className="flex border border-blue-600 p-1" onClick={toggleDropdown}>Actions 
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 9l6 6 6-6" />
            </svg>
      </button>
      {showDropdown && (
        <div className="absolute flex flex-col w-[70px] z-20 bg-blue-500 hover:bg-slate-600 border rounded shadow-md p-1">
          <button className="hover:text-white" onClick={() => {
              alert(`you want to edit ${row.id}`);
            }}>Edit</button>
          <button className="hover:text-white" onClick={() => deletHandler(row.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};
export default Users;
