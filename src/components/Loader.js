import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-[#180432] text-white text-1/2xl bg-center bg-cover flex flex-col justify-center items-center z-50">
        <span className='my-5'>Cargando...</span>
        <BounceLoader color="#ffffff" />
    </div>
  )
}

export default Loader
