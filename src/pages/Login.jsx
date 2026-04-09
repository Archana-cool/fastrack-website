// import React, { useState } from 'react'

// const Login = () => {
//     const[form,setForm]=useState({
//         username:"",
//         email:"",
//         password:"",
//     })
//     const [error,setError]=useState([])
//     constvalidation=()=>{
//         const newError=({})
//         if(!form.username) newError.username="invalid username";
//         if(!form.email) newError.email="invalid email";
//         else
//             if(!/\$+@\$+\.\$+/.test(form.email))newError.email="missing error";
//             if(!form.password) newError.password="invalid password";
//             else{
//                 if(form.password.length<6) newError.password="must in 6 character";
//                 if(|/[a-z]/.test(form.password)) newError.password="must one lowercase character";
//                 if(|/[A-Z]/.test(form.password)) newError.password="must one uppercase character";
//                 if(|/[!@#$%&*?]/.test(form.password)) newError.password="must one in special character";
//             }
//             return.newError;
//         }
//         const handleChange=(e)=>{
//             const [name,value]=e.target;
//             setForm({
//                 ...form,
//              [name]:value,
//             })
//         }
//         const 


//   return (
//     <div>Login</div>
//   )
// }

// export default Login