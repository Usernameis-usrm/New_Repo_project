import React, { useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import { MenuList } from "../data/data";

export default function AddFlight() {

    const [MenuList,setMenuList]=useState("");
    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [Price, setPrice] = useState('');
    const Navigate=useNavigate();


    const handleAdd = () => {
        const Item = {
            id: id,
            name: name,
            Price: Price,
            

        }
        setMenuList(MenuList=> [...MenuList, ...Item]);
        // axios.post('https://localhost:44351/api/Flights', data)
        //     .then((result) => {
        //         alert("Flight Added to the schedule");
        //     }).catch((error) => {
        //         alert(error)
        //     })
    }



    return (
        <>
        {/* <AdminHeader/> */}
        <center>
        <div className="bk">
            <div>Add Item</div>
            <label>Item Id</label>
            <input type="text" id="id" placeholder="id" onChange={(e) => setid(e.target.value)} /> <br></br>
            <label>Item Name</label>
            <input type="text" id="name" placeholder="name" onChange={(e) => setname(e.target.value)} /> <br></br>
            <label>Price</label>
            <input type="text" id="Price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} /> <br></br>
            <button className="btn btn-primary" onClick={() => handleAdd()}>Add</button> 
            <button className="btn btn-primary" onClick={() => Navigate('/Admin')}>Back</button>
        </div>
        </center>
        </>


    )
} 



// import React,{ useState } from "react";
// import { MenuList } from "../data/data";
// const AddMenu=()=>{
//     const [newlist, setMenuList] = useState("");
//     //const [newItem, setMenuItem] = useState("");
//     const [id,setid]=useState("");
//     const [Name,setName]=useState("");
//     const [Price,setPrice]=useState("");

//       const Item={
//       id:id,
//       Name:Name,
//       Price:Price}
//     function addNewItem(e) {
//         e.preventDefault();
//         const newItem = e.target.value;
        
//         setMenuList(MenuList=> [...MenuList, ...Item]);
//         setMenuItem(newItem);
//       }
// return (
//     // <div><h1>AddMenu</h1></div>
// <center>
//     <div class="container mt-5">
  
//             <div class="row mx-auto mt-5">
//             {/* <img src={feedback} width="100" height="500" /> */}
//                 <div class="mx-auto col-md-6 mt-5 pt-4">
               
//                     <div class="card mb-5 p-2  shadow rounded">
                    
//                         <div class="card-body mt-2">
                        
//                             <div class="row mb-3">
                            
//                                 <h3 class="text-success text-center border-bottom border-success p-3">Feedback</h3> 
//                             </div>
//                         <form onSubmit={addNewItem}>
                          
//                           <div class="mb-3 mt-2">
//                                   <label for="CustomerName" class="form-label">Customer Name</label>
//                                   {/* <input type="text" Name="CustomerName" class="form-control border-success shadow-none " id="CustId" 
//                                     value={CustomerName} onChange={(e) => setCustomerName(e.target.value)}/> */}
//                           </div>
//                           <div class="mb-3 mt-2">
//                                   <label for="rating" class="form-label">Rate Us!</label>
//                                   {/* <input type="text" Name="rating" class="form-control border-success shadow-none " id="rating" 
//                                     value={rating} onChange={(e) => setRating(parseInt(e.target.value))}/> */}
//                           </div>
                          
//                           {/* <div class="col-sm-3"><a href="/allFeedback" class="text-decoration-none mb-3 text-success fw-bold ">See All Feedback?</a></div> */}
//                           <div class="row">
//                                 <div class="mt-3 text-center">
//                                     <input type="submit"  name="Feedback" value="Give Rating" class="btn  btn-success border-light shadow-none w-25 mb-3"/>
//                                     </div>
//                                 </div>
//                                 Go back to Home <a href="/Admin" class="text-decoration-none mb-3 text-success fw-bold "> HOME</a>
//                           </form>
                                
//                             </div>
//                       </div>
//                       </div>
//                       </div>
//                       </div>
//                       </center>
// )
// };
// export default AddMenu;