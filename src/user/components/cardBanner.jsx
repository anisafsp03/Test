import React from 'react';

export default function CardBanner({img}) {
  return (
    <>
      <div className="card justify-center mt-10 ml-3">
        <div>
          <img className="object-none object-left  w-96 h-48 rounded-lg" src={img} alt='none' />
        </div>
        {/* <div className="card-body font-poppins -mx-3">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize text-center">{title}</h3>
          <p className='text-xs -mb-5 line-clamp-5'>{desc}</p> 
        </div> */}
      </div> 
    </>
  )
}