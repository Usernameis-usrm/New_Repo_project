import React, { Fragment, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
//import { toast, ToastContainer } from "react-toast";
//import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const Navigate = useNavigate();

    const handleNameChange = (value => {
        setName(value);
    })
    const handleEmailChange = (value => {
        setEmail(value);
    })
    const handlePasswordChange = (value => {
        setPassword(value);
    })
    const handlePhoneChange = (value => {
        setPhone(value);
    })
    const handleSave = () => {
        const data = {
            Name: name,
            Email: email,
            Password: password,
            Phone: phone
        }
        axios.post('https://localhost:44302/api/Customer', data)
            .then((result) => {
                alert("Registration Successful");
                Navigate('/home', { replace: false });

            }).catch((error) => {
                alert(error)
            })

    }


    return (
        <>
            <div>Registration</div>
            <div className="form-group">
            <label>Name</label>
            <input type="text"  className="form-control" id="Name" placeholder="Enter the Name" onChange={(e) => handleNameChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="text"  className="form-control" id="Email" placeholder="Enter the Email" onChange={(e) => handleEmailChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="Password" placeholder="Enter the Password" onChange={(e) => handlePasswordChange(e.target.value)} /> <br></br>
            </div>
            <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" id="Phone" placeholder="Enter the phone number" onChange={(e) => handlePhoneChange(e.target.value)} /> <br></br>
            </div>
            <button class="btn btn-primary" onClick={() => handleSave()}>Save</button>
        </>
        

    )
}

export default Register;















// import React,{ useState} from "react";
// import axios from "axios";
// export default function Register(){
//     const[data,setData]=useState({
//         "name": '',
//         "email": '',
//         "password":'',
//         "phone":''
//     });
//     const handleInputChange=event=>{
//         setData({
//             ...data,
//             [event.target.name]:event.target.value
//         });
//     };

//     const handleSubmit=event=>{
//         event.preventDefault();
//         console.log('data after submit',data)
//         fetch('https://localhost:44351/api/Users',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(Response=>{Response.json();
//         console.log(Response.json())})
//         .then(data=>{
//             console.log('Success:',data);
//             setData({
//                 Name:'',
//                 email:'',
//                 password:'',
//                 phone:''
//             })
//          })
//          .catch(error=>{
//             console.log('Error:',error)
//          })
//     }

//     return(
//         <form onSubmit={handleSubmit}>

//             <div className="form-group">
//                 <label htmlFor="Name">UserName</label>
//                 <input type="text" name="Name"
//                 value={data.userName} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>

//             <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input type="text" name="email"
//                 value={data.email} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>

//             <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password"
//                 value={data.password} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>

//             <div className="form-group">
//                 <label htmlFor="phone">Phone</label>
//                 <input type="text" name="phone"
//                 value={data.phone} className="form-control"
//                 onChange={handleInputChange}></input>
//             </div>


//             <div className="form-group">
//                 <button type="submit" className="btn btn-success"> Register </button>
//             </div>
//         </form>
//     )
// }
// import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";

// import RegistrationFormstyles from "./RegistrationFormstyles.css";
// //C:\Users\123\Desktop\3\Hexaware\ReactDemos\cafe-ui\src\Routings\RegistrationFormstyles.css
// const RegistrationForm=() => {
//     const[fullname,setFullname]=useState('');
//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');
//     const[confirmpassword,setConfirmPassword]=useState('');
//     const[errors,setErrors]=useState({});
//     const navigate=useNavigate();
//     const validateForm= () => {
//         console.log('validateForm called')
//         let errors={};
//         let isValid=true;
//         if(!fullname){
//             console.log('errors.fullname')
//             errors.fullname='Enter your full name';
//             console.log(errors.fullname);
//             isValid=false;
//         }
//         if(!email) {
//             errors.email="Enter your email";
//             isValid=false;
//         }
//         if(email.length>0){
//             if(!/\S+@\S+\.\S/.test(email)) {
//                 errors.email='Enter a valid email address';
//                 isValid=false;
//             }
//         }
//         if(!password) {
//             console.log('password is Empty')
//             errors.password='enter the password';
//             isValid=false;
//         }
//         if(password.length>0) {
//             console.log(password.length)
//             if(password.length <6) {
//                 errors.password='password must be 6 characters long';
//                 isValid=false;
//             }
//         }
//         if(!confirmpassword) {
//             errors.confirmpassword='enter the password';
//             isValid=false;
//         }
//         if(confirmpassword.length>0) {
//             if(password !=confirmpassword) {
//                 errors.confirmpassword='Password do not match';
//                 isValid=false;
//             }
//         }
//         setErrors(errors);
//         return isValid;
//   }
//   const handleSubmit=(event) =>{
//     event.preventDefault();
//     console.log('handleSubmit called');
//     console.log('validateForm(return' +validateForm());
//     if(validateForm()) {
       
//         alert(`Name: ${fullname} \nEmail:${email} \nPassword:${password}\nhas registered`);
//         navigate('/login',{replace:true});

//     }
//     else {
//         console.log(`${errors.password}`);
//     }
//   }
//   return (
//     <form className="app" onSubmit={handleSubmit} >
//         <div className='form-group'>
//             <label htmlFor="fullname">Name</label>
//            <input type="text"
//              className={`form-control ${errors.fullname ? 'error' : ''}`}
//              id="fullName"
//              value={fullname}
//              onChange={(event => { setFullname(event.target.value)})} />
//              {errors.fullname &&
//              <span className="text-danger">{errors.fullname}</span>}
//         </div>
//         <div className='form-group'>
//             <label htmlFor="email">Email</label>
//            <input type="text"
//              className={`form-control ${errors.email ? 'error' : ''}`}
//              id="email"
//              value={email}
//              onChange={(event => { setEmail(event.target.value)})} />
//              {errors.email &&
//              <span className="text-danger">{errors.email}</span>}
//         </div>
//         <div className='form-group'>
//             <label htmlFor="password">Password</label>
//            <input type="text"
//              className={`form-control ${errors.password ? 'error' : ''}`}
//              id="password"
//              value={password}
//              onChange={(event => { setPassword(event.target.value)})} />
//              {errors.password &&
//              <span className="text-danger">{errors.password}</span>}
//         </div>
//         <div className='form-group'>
//             <label htmlFor="confirmpassword">ConfirmPassword</label>
//            <input type="text"
//              className={`form-control ${errors.confirmpassword ? 'error' : ''}`}
//              id="confirmpassword"
//              value={confirmpassword}
//              onChange={(event => { setConfirmPassword(event.target.value)})} />
//              {errors.confirmpassword &&
//              <span className="text-danger">{errors.confirmpassword}</span>}
//         </div>
//         <div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//             <button type="reset" className="btn btn-danger">Cancel</button>
//         </div>
//     </form>
//   )
// }

// export default RegistrationForm;