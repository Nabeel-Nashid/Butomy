// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { dataApi } from "../Store/Slice/dataSlice";

// function LipstickCard() {
//   const dispatch = useDispatch();

//   const { dataList } = useSelector((state) => state.data);
//   const lip = dataList?.map((data) => data.category==="cream");
//   console.log("datalist===", dataList);

//   useEffect(() => {
//     dispatch(dataApi());
//   }, []);
//   return (
//     <div>
//       <div className="flex flex-wrap justify-center">
//         {lip.map((item) => (
//           <div
//             key={item.id}
//             className="card m-2 p-4 w-1/5 shadow-2xl rounded-lg"
//           >
//             <img src={item.image_link} alt={item.name} className="w-36 h-36" />
//             <div className="card-content mt-2">
//               <div className="text-lg font-bold">{item.name}</div>
//               <div>{item.category}</div>
//               <div>ID: {item.id}</div>
//               <div>
//                 <button className="bg-blue-500 text-white p-1.5 mr-4 rounded-lg">
//                   -
//                 </button>
//                 1
//                 <button className="bg-red-500 text-white p-1.5 rounded-lg">
//                   +
//                 </button>
//               </div>
//               <button className="bg-green-700 text-white p-2 rounded-md mt-3">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LipstickCard;
