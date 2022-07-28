import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from './button';

export default function CardKategori({img, title, link}) {
  return (
    <Link className='bg-light-green' to={link}>
      <div class="card justify-center">
        <div className='flex flex-col items-center'>
          <img className="w-28 h-28 lg:w-40 lg:h-40 mx-auto p-5" src={img}/>
        </div>
        <div class="card-body font-poppins -mx-3">
          <h3 class="card-title font-montserrat text-xs lg:text-base -mt-8 -mb-4 capitalize text-center line-clamp-2">{title}</h3>
          <Link className="justify-center card-actions" to={link}>
            <Button type='more'>learn more</Button>
          </Link>
        </div>
      </div> 
    </Link>
  )
}