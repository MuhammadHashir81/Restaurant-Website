import React from 'react';

const Home = () => {


 
  return (
    <>
      <div className="relative h-screen py-4 bg-black">
        <img
          src="/restaurant.jpg"
          className="object-cover w-full h-full"
          alt='error'
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 px-16 max-sm:px-4">
          <h1 className="text-white text-5xl font-bold py-5 max-sm:text-4xl">Enjoy Your Meal</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea saepe, quod autem maxime officiis in fugit amet culpa ipsam inventore! Aliquid fuga quibusdam exercitationem dolores aperiam animi, reprehenderit quod nam.</p>
        </div>
      </div>
    </>
  );
};

export default Home;



