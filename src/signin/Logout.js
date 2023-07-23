import React from 'react'
const Logout = () => {

        // Clear the logged-in user data from localStorage
        localStorage.removeItem('loginUser');
        // Redirect to the login page after logout
    
        window.location.href = '/';
  
   
}

export default Logout
