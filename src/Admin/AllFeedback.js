import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AllFeedback() {
    const [data, setData] = useState([]);    

    const Navigate = useNavigate();

    const handleBack=()=>{
        Navigate('/Admin', { replace: false });
    }

    useEffect(() => {
        axios.get('https://localhost:44302/api/Feedback')
            .then(result => {
                setData(result.data)
            })

    }, []);

    return (
        <div>
           <center> <h1>ALL-Feedback</h1></center>
            
           <button class="btn btn-primary" onClick={() => handleBack()}> BACK </button><table 
            class="table table-striped table-dark"
            >
                <thead>
                    <tr>
                        <th scope="col">FeedbackID</th>                        
                        <th scope="col">CustomerId</th>
                        <th scope="col">CustomerName</th>
                        <th scope="col">Rating</th>
                        
                        

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr 
                                key={index}
                                >
                                    <td>{item.fid}</td>                                    
                                    <td>{item.custId}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.rating}</td>
                                  
                                    
                                    
                                </tr>
                            )
                        })}
                </tbody>
            </table>

            
        </div>
    )

}