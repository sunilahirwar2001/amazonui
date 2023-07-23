import React,{useState} from "react";

const SignUp = () => {
    const[name,setName] = useState('');
    const [email,setEmail]= useState('');
    const[phone,setPhone] = useState('');
    const[gender,setGender] = useState('male');
    const[password,setPassword] = useState('');
    const[errorMessage,setErrorMessage] = useState('');
    const[welcomeMessage,setWelcomeMessage] = useState('');
  
  //  const validateForm=(event)=>{
  //       event.preventDefault();
  //     setErrorMessage('')
  //     setWelcomeMessage('');
     
  const validateForm = (event) => {
    event.preventDefault();
    setErrorMessage('');
    setWelcomeMessage('');
    const user = {
      name,
      email,
      phone,
      gender,
      password,
    };
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    usersData.push(user);
    localStorage.setItem('usersData', JSON.stringify(usersData));
  
    setWelcomeMessage(`Hello ${email.split('@')[0]}`);
  
    // ...existing validation checks...
  
    // Save user data to localStorage
   
  
  
        if(!name || !email || !gender || !phone  || !password){
          setErrorMessage('All fields are mandatory');
          return
        }
        const alphaNumeric = /^[a-zA-Z0-9\s]*$/;
        if(!alphaNumeric.test(name)){
          setErrorMessage("Name is not alphanumeric");
          return
        }
        if(!email.includes('@')){
          setErrorMessage("Email must contain @");
          return
        }
  
    if(gender!=='male' && gender!== 'female' &&   gender!=='other'){
  setErrorMessage("Please identitfy as male, female, or other")
  return
    }
   if(isNaN(phone)){
    setErrorMessage("Phone Number must contain only numbers ");
    return
   }
   if(password.length<6){
  setErrorMessage("Password must contain at least 6 numbers ");
  return
   }
  
  
};
     
   
  
  
  
  
    return (
      <div className="p-4">
        <form onSubmit={validateForm}   className="max-w-sm mx-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2 ">Name</label>
        <input 
         type='text'  data-testid = 'name' value={name} 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e)=>setName(e.target.value)}/>
       
        <label className="block text-gray-700 text-sm font-bold mb-2 ">Email address</label>
        <input type='email'  data-testid = 'email' value={email}
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         onChange={(e)=>setEmail(e.target.value)}/>
      
    <select className="block text-gray-700 text-sm font-bold mb-2 "
    id='gender'
    value={gender}
    onChange={(e)=>setGender(e.target.value)}>Gender
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  
        <label className="block text-gray-700 text-sm font-bold mb-2 ">Phone Number</label>
        <input type='number'  data-testid = 'phoneNumber' value={phone}  
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         onChange={(e)=>setPhone(e.target.value)}/>
       
        <label className="block text-gray-700 text-sm font-bold mb-2 ">Password</label>
        <input type='password'  data-testid = 'password' value={password}  
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"


        onChange={(e)=>setPassword(e.target.value)}/>
      
        <button  data-testid = 'submit'   
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"        
                                         >Submit button</button> 
   </form>    
   {errorMessage && <div  className="text-red-500">{errorMessage} </div>}
     
     {welcomeMessage && <div className="text-green-500">{welcomeMessage}</div>}
     
     
     
      </div>
    )
  }
  
  export default SignUp
  
  