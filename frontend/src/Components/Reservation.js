import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/restaurant/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
        })
      });

      const result = await response.json();
         console.log(result.errors);
      if (!response.ok) {
        const errorMessages = result.errors.join(' & ');
        toast.error(errorMessages);
      } else {
        toast.success("User registered successfully!");
      }
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
    }
  };

  return (
    <div className='m-40 flex justify-center items-center max-sm:m-0 max-sm:my-10'>
      <form onSubmit={fetchData} className='bg-white p-8 rounded-lg shadow-lg'>
        <label htmlFor="firstName" className='block mb-2 text-lg font-medium'>First Name</label>
        <input
          type="text"
          id='firstName'
          className='w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName" className='block mb-2 text-lg font-medium'>Last Name</label>
        <input
          type="text"
          id='lastName'
          className='w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="phone" className='block mb-2 text-lg font-medium'>Phone</label>
        <input
          type="number"
          id='phone'
          className='w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Phone no"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-blue-600 transition duration-300'>Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Reservation;
