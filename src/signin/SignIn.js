import React, { useState } from 'react';



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    setErrorMessage('');

    // Get user data from localStorage
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    const foundUser = usersData.find((user) => user.email === email && user.password === password);
    console.log(foundUser);

    // if (!foundUser) {
    //   setErrorMessage('Invalid email or password');
    // } else {
    //   setErrorMessage('');
    //   // Implement your logic for successful sign-in here (e.g., redirect to another page)
    //   console.log('Sign in successful!');
    //  localStorage.setItem('loginUser',foundUser.name);
     
    //  navigate('/');
    // }



    // ... (existing code)

if (!foundUser) {
  setErrorMessage('Invalid email or password');
} else {
  setErrorMessage('');
  console.log('Sign in successful!');
  localStorage.setItem('loginUser', foundUser.name);
  // Perform manual redirect
  window.location.href = '/';
}










  };

  return (
    <div className="p-4">
      <form onSubmit={handleSignIn} className="max-w-sm mx-auto">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
        <input
          type="email"
          data-testid="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label className="block mt-3 text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="password"
          data-testid="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
 
        <button
          type="submit"
          data-testid="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
        
      </form>

      {errorMessage && <div className="text-red-500 mt-3">{errorMessage}</div>}
    </div>
  );
};

export default SignIn;
