import { useEffect } from "react";
import { useState } from "react";
import { useApi } from "../Context/Context";
import DataTable from "react-data-table-component";

export default function FoodItem() {
  return (
    <div className="w-full h-full overflow-x-hidden p-1 ">
      <CategoryItem />
    </div>
  );
}

function CategoryItem() {
  const { foodItems, setFoodItems } = useApi();
  const [updater, setUpdater] = useState("id");
  const [addNew, setAddNew] = useState("");

  const getFoodItems = async () => {
    try {
      await fetch("http://localhost:3000/item/getallitem")
        .then((res) => res.json())
        .then((data) => setFoodItems(data.data));
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  const columns = [
    {
      name: <p className="text-2xl z-0">Order id</p>,
      selector: (row) => <p className="text-xl">{row._id}</p>,
    },
    {
      name: <p className="text-2xl">Name</p>,
      selector: (row) => <p className="text-xl">{row.name}</p>,
    },
    {
      name: <p className="text-2xl">Category</p>,
      selector: (row) => <p className="text-xl">{row.category.name}</p>,
    },
    {
      name: <p className="text-2xl">Avaliablity</p>,
      selector: (row) => {
        return (row.avaliability = true ? (
          <p className="text-xl">Avaliable</p>
        ) : (
          <p className="text-xl">Not Avaliable</p>
        ));
      },
    },
    {
      name: <p className="text-2xl">Action</p>,
      selector: (row) => <Action setUpdater={setUpdater} rowData={row} />,
    },
  ];

  const customStyle = {
    row: {
      style: {
        fontSize: "2xl",
      },
    },
  };

  useEffect(() => {
    getFoodItems();
  }, [updater]);

  foodItems.map((item) => {
    console.log(item.category.name);
  });
  return (
    <DataTable
      title="Categories"
      columns={columns}
      data={foodItems}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="400px"
      customStyles={customStyle}
      highlightOnHover
      actions={
        <div
          onClick={() => setAddNew("newCategory")}
          className="bg-slate-700 text-white p-2 rounded-lg text-base "
        >
          Add new
          {addNew === "newCategory" && (
            <AddNew
              setUpdater={setUpdater}
              setAddNew={setAddNew}
              rowData={foodItems}
            />
          )}
        </div>
      }
    />
  );
}

function Action({ rowData, setUpdater }) {
  const [name, setName] = useState("");
  // const [selectedId, setSelectId] = useState();
  function handleClick(value) {
    if (value === "delete") {
      setName("delete");
    }
    if (value === "edit") {
      setName("edit");
    }
    if (value === "view") {
      setName("view");
    }
  }
  return (
    <>
      <div
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        className="text-xl space-x-5 "
      >
        <button
          value="edit"
          className="border-2 border-rose-500 p-1 rounded-lg"
        >
          Edit
        </button>
        <button
          value="view"
          className="border-2 border-rose-500 p-1 rounded-lg"
        >
          View
        </button>
        <button
          value="delete"
          className="border-2 border-rose-500 p-1 rounded-lg"
        >
          Delete
        </button>
      </div>

      {name === "delete" && (
        <Delete setUpdater={setUpdater} nextRow={rowData} setName={setName} />
      )}
      {name === "view" && <View nextRow={rowData} setName={setName} />}
      {name === "edit" && (
        <Edit setUpdater={setUpdater} nextRow={rowData} setName={setName} />
      )}
    </>
  );
}
function Delete({ setName, setUpdater, nextRow }) {
  const getDelete = async () => {
    try {
      await fetch(`http://localhost:3000/item/deleteitem/${nextRow._id}`, {
        method: "Delete",
      })
        .then(setUpdater(nextRow._id))
        .then(setName(""));
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  return (
    <div className="z-10 fixed inset-0 flex flex-col space-y-14 bg-opacity-5 bg-black justify-center items-center w-full h-full p-4 text-white">
      <div className="bg-slate-900 w-2/5 h-1/4 text-center text-xl rounded-lg p-2">
        <h1 className="font-bold text-2xl">Are you sure?</h1>
        <p className="mt-2">
          Once deleted, you will not be able to recover this data !
        </p>
        <button
          onClick={() => getDelete()}
          className="bg-slate-700 p-2 mt-9 mr-5 rounded-lg"
        >
          Delete
        </button>
        <button
          onClick={() => setName("")}
          className="bg-slate-700 rounded-lg p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function View({ setName, nextRow }) {
  // console.log(selectedId);
  return (
    <div className="z-10 fixed inset-0 flex flex-col space-y-14 bg-opacity-5 bg-black justify-center items-center w-full h-full p-4 text-white">
      <div className="bg-black w-2/5 h-2/4 text-center text-xl rounded-lg p-3">
        <h1>View details here</h1>
        <label htmlFor="">Order id :</label>
        <br />
        <input
          type="text"
          disabled
          value={nextRow._id}
          className="p-2 rounded-lg w-2/3 text-center"
        />{" "}
        <br />
        <label htmlFor="">Item Name :</label> <br />
        <input
          type="text"
          disabled
          value={nextRow.name}
          className="text-center  p-1 rounded-lg"
        />{" "}
        <br />
        <label htmlFor="">Category Name :</label> <br />
        <input
          type="text"
          disabled
          value={nextRow.category.name}
          className="text-center  p-1 rounded-lg"
        />
        <br />
        <label htmlFor="">Avaliablity</label> <br />
        <input
          type="text"
          disabled
          value={(nextRow.avaliability = true ? "Avaliable" : "not Avaliable")}
          className="text-center  p-1 rounded-lg"
        />
        <br /> <br />
        <button className="bg-rose-700 p-1" onClick={() => setName("")}>
          cancel
        </button>
      </div>
    </div>
  );
}
function Edit({ setName, nextRow, setUpdater }) {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [avaliability, setAvaliablity] = useState();
  console.log(JSON.stringify(data));
  const getUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/item/updateitem/${nextRow._id}`, {
      method: "PUT",
      body: JSON.stringify({ name: data }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(setUpdater("edited" + Date.now()))
      .then(setName(""))
      .catch((err) => console.error(err));
  };
  return (
    <div className="z-10 fixed inset-0 flex flex-col space-y-14 bg-opacity-5 bg-black justify-center items-center w-full h-full p-4 text-white">
      <div className="bg-black w-2/5 h-2/4 text-center text-xl rounded-lg p-3">
        <h1>Update Category</h1>
        <form action="" onSubmit={getUpdate} className="inline">
          <label htmlFor="">Order id: </label> <br />
          <input
            type="text"
            disabled
            value={nextRow._id}
            className="w-2/3 text-center"
          />
          <br /> <br />
          <label htmlFor="">Name :</label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="text-black"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Category Name:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Avaliablity:</label>
          <select
            onChange={(e) => setAvaliablity(e.target.value)}
            className="text-black"
          >
            <option value="true">Avaliable</option>
            <option value="false">Not Avaliable</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Update" className="bg-cyan-600" />
        </form>
        <button className="bg-rose-700 p-1 mx-4" onClick={() => setName("")}>
          cancel
        </button>
      </div>
    </div>
  );
}

function AddNew({ setAddNew, setUpdater, rowData }) {
  const [name, setName] = useState();
  //   console.log(JSON.stringify({ name: newData }));
  const [avaliability, setAvaliablity] = useState();
  const [category, setCategory] = useState();
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     await fetch("http://localhost:3000/item/createitem", {
  //       method: "POST",
  //       body: JSON.stringify({ name: name }),
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .then(setUpdater("new data added" + Date.now()))
  //       .then(setAddNew(""))
  //       .catch((err) => console.error(err));
  //   };
  return (
    <div className="z-10 fixed inset-0 flex flex-col space-y-14 bg-opacity-5 bg-black justify-center items-center w-full h-full p-4 text-white">
      <div className="bg-black w-2/5 h-3/6 text-center text-xl rounded-lg p-3">
        <h1>Add New Category</h1>
        <br />
        <form
        //  onSubmit={handleSubmit}
        >
          <label>Name :</label>
          <input
            type="text"
            value={name}
            className="ml-3 rounded-lg p-2 outline-none text-black"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Avaliablity :</label>
          {/* <input
            type="text"
            value={avaliability}
            className="ml-3 rounded-lg p-2 outline-none text-black"
            onChange={(e) => setAvaliablity(e.target.value)}
          />{" "} */}
          <select
            name=""
            id=""
            onChange={(e) => setAvaliablity(e.target.value)}
            className="text-black p-2 outline-none"
          >
            <option value="true">Avaliable</option>
            <option value="false">Not Avaliable</option>
          </select>
          <br />
          <br />
          <label>Category :</label>
          <select name="" id="">
            {rowData.category.name.map((c) => {
              return <option value="">{c}</option>;
            })}
          </select>
          {/* <input
            type="text"
            value={category}
            className="ml-3 rounded-lg p-2 outline-none text-black"
            onChange={(e) => setCategory(e.target.value)}
          /> */}
          <br />
          <br />
          <input
            type="submit"
            value="Add"
            className="bg-cyan-600 p-3 rounded-lg"
          />
          <button
            className="bg-rose-700 p-3 rounded-lg ml-3"
            onClick={() => setAddNew("")}
          >
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
