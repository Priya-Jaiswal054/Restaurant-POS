// // import { useState } from "react";
// // import { SiJusteat } from "react-icons/si";
// // import { MdManageAccounts } from "react-icons/md";
// // import { MdSpaceDashboard } from "react-icons/md";
// // import { MdFastfood } from "react-icons/md";
// // import { IoSettingsSharp } from "react-icons/io5";
// // import { FaUser } from "react-icons/fa";
// // import { FaChartBar } from "react-icons/fa";

// // export default function SideNav({ icon, text }) {
// //   const [isOpen, setIsOpen] = useState(true);

// //   function toggle() {
// //     setIsOpen(!isOpen);
// //   }
// //   return (
// //     <div
// //       className={`${
// //         isOpen
// //           ? "w-2/12 ease-linear duration-0"
// //           : "w-[5%] translate-x-0 ease-linear duration-200 "
// //       } bg-gray-900  text-white flex flex-col h-[100vh] text-lg font-bold border-e border-gray-600`}
// //     >
// //       <div
// //         className="p-5 flex items-center border-b border-gray-600"
// //         onClick={() => toggle()}
// //       >
// //         <button className="p-1.5">
// //           <SiJusteat className="mt-1" />
// //         </button>
// //         <span
// //           className={`${!isOpen ? "hidden" : "block"}  w-full cursor-pointer`}
// //         >
// //           Welcome Back
// //         </span>
// //       </div>

// //       <div className=" grid grid-col-1 justify-items-start ">
// //         <Item isOpen={isOpen} />
// //       </div>
// //     </div>
// //   );
// // }

// // function Item({ isOpen }) {
// //   return (
// //     <>
// //       <NavItem
// //         icon={<MdSpaceDashboard className="inline mx-3" />}
// //         text="DashBoard"
// //         isOpen={isOpen}
// //       />
// //       <NavItem
// //         icon={<FaChartBar className="inline mx-3" />}
// //         text="DashBoard"
// //         isOpen={isOpen}
// //       />
// //       <NavItem
// //         icon={<MdFastfood className="inline mx-3" />}
// //         text=" Sales"
// //         isOpen={isOpen}
// //       />
// //       <NavItem
// //         icon={<FaUser className="inline mx-3" />}
// //         text=" Users"
// //         isOpen={isOpen}
// //       />
// //       <NavItem
// //         icon={<IoSettingsSharp className="inline mx-3" />}
// //         text="  Settings"
// //         isOpen={isOpen}
// //       />
// //       <NavItem
// //         icon={<MdManageAccounts className="inline mx-3" />}
// //         text=" My Account"
// //         isOpen={isOpen}
// //       />
// //     </>
// //   );
// // }

// // function NavItem({ icon, text, isOpen }) {
// //   return (
// //     <button className="py-5 ml-3">
// //       {icon}
// //       <span
// //         className={`${
// //           !isOpen
// //             ? "hidden"
// //             : setTimeout(() => {
// //                 return "block";
// //               }, 10000)
// //         } inline `}
// //       >
// //         {text}
// //       </span>
// //     </button>
// //   );
// // }

// import React, { useState } from "react";
// import { MdOutlineRestaurantMenu, MdTableBar } from "react-icons/md";
// import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
// import { GiKitchenScale } from "react-icons/gi";
// import { AiOutlineUser } from "react-icons/ai";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoFastFood } from "react-icons/io5";

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const menus = [
//     { name: "dashboard", link: "/", icon: MdOutlineDashboard },
//     { name: "users", link: "/user", icon: AiOutlineUser },
//     { name: "Kitchen", link: "/kitchen", icon: GiKitchenScale },
//     { name: "POS", link: "/pos", icon: TbReportAnalytics, margin: true },
//     { name: "Foods", link: "/foodItem", icon: IoFastFood },
//     { name: "Tables", link: "/tables", icon: MdTableBar },
//     { name: "Order", link: "/orders", icon: FiShoppingCart },
//     { name: "Setting", link: "/", icon: RiSettings4Line },
//   ];
//   const [open, setOpen] = useState(true);
//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-gray-800 min-h-screen ${
//           open ? "w-44" : "w-16"
//         } duration-500  text-white-200 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <MdOutlineRestaurantMenu
//             size={26}
//             className="cursor-pointer text-white"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-2 relative">
//           {menus?.map((menu, i) => (
//             <Link
//               to={menu?.link}
//               key={i}
//               className={` ${
//                 menu?.margin && "mt-0"
//               } group flex items-center text-sm  gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md `}
//             >
//               <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//               <h2
//                 style={{
//                   transitionDelay: `${i + 3}00ms`,
//                 }}
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {menu?.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//               >
//                 {menu?.name}
//               </h2>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { SiJusteat } from "react-icons/si";
// import { MdManageAccounts } from "react-icons/md";
// import { MdSpaceDashboard } from "react-icons/md";
// import { MdFastfood } from "react-icons/md";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaUser } from "react-icons/fa";
// import { FaChartBar } from "react-icons/fa";

// export default function SideNav({ icon, text }) {
//   const [isOpen, setIsOpen] = useState(true);

//   function toggle() {
//     setIsOpen(!isOpen);
//   }
//   return (
//     <div
//       className={`${
//         isOpen
//           ? "w-2/12 ease-linear duration-0"
//           : "w-[5%] translate-x-0 ease-linear duration-200 "
//       } bg-gray-900  text-white flex flex-col h-[100vh] text-lg font-bold border-e border-gray-600`}
//     >
//       <div
//         className="p-5 flex items-center border-b border-gray-600"
//         onClick={() => toggle()}
//       >
//         <button className="p-1.5">
//           <SiJusteat className="mt-1" />
//         </button>
//         <span
//           className={`${!isOpen ? "hidden" : "block"}  w-full cursor-pointer`}
//         >
//           Welcome Back
//         </span>
//       </div>

//       <div className=" grid grid-col-1 justify-items-start ">
//         <Item isOpen={isOpen} />
//       </div>
//     </div>
//   );
// }

// function Item({ isOpen }) {
//   return (
//     <>
//       <NavItem
//         icon={<MdSpaceDashboard className="inline mx-3" />}
//         text="DashBoard"
//         isOpen={isOpen}
//       />
//       <NavItem
//         icon={<FaChartBar className="inline mx-3" />}
//         text="DashBoard"
//         isOpen={isOpen}
//       />
//       <NavItem
//         icon={<MdFastfood className="inline mx-3" />}
//         text=" Sales"
//         isOpen={isOpen}
//       />
//       <NavItem
//         icon={<FaUser className="inline mx-3" />}
//         text=" Users"
//         isOpen={isOpen}
//       />
//       <NavItem
//         icon={<IoSettingsSharp className="inline mx-3" />}
//         text="  Settings"
//         isOpen={isOpen}
//       />
//       <NavItem
//         icon={<MdManageAccounts className="inline mx-3" />}
//         text=" My Account"
//         isOpen={isOpen}
//       />
//     </>
//   );
// }

// function NavItem({ icon, text, isOpen }) {
//   return (
//     <button className="py-5 ml-3">
//       {icon}
//       <span
//         className={`${
//           !isOpen
//             ? "hidden"
//             : setTimeout(() => {
//                 return "block";
//               }, 10000)
//         } inline `}
//       >
//         {text}
//       </span>
//     </button>
//   );
// }

import React, { useState } from "react";
import {
  MdOutlineRestaurantMenu,
  MdSettingsApplications,
  MdTableBar,
} from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbBurger, TbReportAnalytics } from "react-icons/tb";
import { GiAccordion, GiKitchenScale } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { IoFastFood } from "react-icons/io5";

import { Link } from "react-router-dom";

const Navbar = () => {
  // const menus = [
  //   { name: "dashboard", link: "/", icon: MdOutlineDashboard },
  //   { name: "users", link: "/", icon: AiOutlineUser },
  //   { name: "Kitchen", link: "/", icon: GiKitchenScale },
  //   { name: "POS", link: "/pos", icon: TbReportAnalytics, margin: true },
  //   { name: "Foods", link: "/", icon: IoFastFood },
  //   { name: "Tables", link: "/tables", icon: MdTableBar },
  //   { name: "Order", link: "/orders", icon: FiShoppingCart },
  //   {
  //     name: "Setting",
  //     link: "/",
  //     icon: RiSettings4Line,
  //     accordion: true,
  //     list: ["general", "discount"],
  //   },
  // ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-gray-800 min-h-screen ${
          open ? "w-44" : "w-16"
        } duration-500  text-white-200 px-4`}
      >
        <div className="py-3 flex justify-end">
          <MdOutlineRestaurantMenu
            size={26}
            className="cursor-pointer text-white"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 relative">
          <Link
            to="/"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <MdOutlineDashboard />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Dashboard
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Dashboard
            </h2>
          </Link>
          <Link
            to="/users"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <AiOutlineUser />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Users
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Users
            </h2>
          </Link>
          <Link
            to="/kitchen"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <GiKitchenScale />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Kitchen
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Kitchen
            </h2>
          </Link>
          <Link
            to="/POS"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <TbReportAnalytics />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              POS
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              POS
            </h2>
          </Link>
          <Link
            to="/Foods"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <IoFastFood />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Foods
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Foods
            </h2>
          </Link>
          <Link
            to="/tables"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <MdTableBar />{" "}
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Tables
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Tables
            </h2>
          </Link>
          <Link
            to="/orders"
            className="mt-0 items-center  group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
          >
            <div>
              <FiShoppingCart />
            </div>
            <h2
              style={{
                transitionDelay: ` 300ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Orders
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              Orders
            </h2>
          </Link>
          <AccordionLink open={open} />
        </div>
      </div>
    </section>
  );
};

function AccordionLink({ open }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="group text-smgap-3.5 font-medium text-white rounded-md ">
      <Link
        to="/"
        className="mt-0 group text-sm flex gap-3.5 font-medium p-2  hover:bg-[#265073] hover: text-white rounded-md "
      >
        <div>
          <RiSettings4Line />
        </div>
        <div
          style={{
            transitionDelay: ` 300ms`,
          }}
          className={`whitespace-pre flex items-center space-x-4 duration-500 ${
            !open && "opacity-0  translate-x-28 overflow-hidden"
          }`}
        >
          <h6>Setting</h6>{" "}
          <div
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {isClicked ? <FiMinus /> : <FiPlus />}
          </div>
        </div>

        <h2
          className={`${
            open && "hidden"
          } absolute left-48 bg-white font-semibold whitespace-pre text-blue-400 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
        >
          {name}
        </h2>
      </Link>

      {isClicked && (
        <div>
          <Link
            to="/"
            className={`mt-0 ms-7 group text-sm flex gap-3.5 font-medium p-2 ${
              !open && "opacity-0  translate-x-28 overflow-hidden"
            } hover:bg-[#265073] hover: text-white rounded-md `}
          >
            General
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
