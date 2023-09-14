// import React, { useState, useEffect } from "react";
// import '../all.css';
// import Axios from "axios";


// const AllOrders = () => {

// const [item, setOrders] = useState([]);


// const fetchOrders = async () => {
//   const { data } = await Axios.get(
//      "https://localhost:44302/api/Orders"

//     );
    
//     console.log(data.response);
//   setOrders(data.response);
//   console.log(item);

  
// };
// const display = () => {
//   return (item || []).map(item => (
//     <tr key={item}>
//        <td>{item.OrderId}</td>
//           <td>{item.CustomerId}</td>
//           <td>{item.ItemId}</td>
//           <td>{item.Price}</td>
//           <td>{item.Quantity}</td>
//           <td>{item.TotalPrice}</td>
//      </tr>
//    ) );
  
//  }
// useEffect(() => {
//   fetchOrders();
// }, []);

//   return (
    
//     <div>

// <table>
//   <thead>
//     <tr>
//     <th scope="col">OrderId</th>
// //                         <th scope="col">Customer Id</th>
// //                         <th scope="col">ItemId</th>
// //                         <th scope="col">Price</th>
// //                         <th scope="col">Quantity</th>
// //                         <th scope="col">TotalPrice</th>

//     </tr>
//   </thead>
//   <tbody>
//   {display()}

//   </tbody>
  
 
// </table>
//     </div>
  
  
//   )
// }

// export default AllOders;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllOrders() {
    const [data, setData] = useState([]);
    

    const Navigate = useNavigate();

    const handleBack=()=>{
        Navigate('/Admin', { replace: false });
    }

    useEffect(() => {
        axios.get('https://localhost:44302/api/Orders')
            .then(result => {
                setData(result.data)
            })

    }, []);

    return (
        <div>
            <center><h1>ALL Orders</h1></center>
            <button class="btn btn-primary" onClick={() => handleBack()}> BACK </button>
            <table 
            class="table table-striped table-dark"
            >
                <thead>
                    <tr>
                        <th scope="col">OrderId</th>
                        <th scope="col">Customer Id</th>
                        <th scope="col">ItemId</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">TotalPrice</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.orderId}</td>
                                    <td>{item.customerId}</td>
                                    <td>{item.itemId}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.totalPrice}</td>
                                    
                                </tr>
                            )
                        })}
                </tbody>
            </table>

            
        </div>
    )

}