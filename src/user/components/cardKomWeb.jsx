import React from 'react'
import { Link } from 'react-router-dom'

export default function CardKomWeb({ img, title, desc, link }) {
  return (
    <Link to={link}>
      <div className="card shadow-2xl justify-center">
        <img className="object-cover w-58 h-58 mx-auto" src={img} alt='iamge'/>
        <div className="card-body font-poppins -mx-3">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize text-center line-clamp-2">
            {title}
          </h3>
          <p className="text-xs -mb-5 line-clamp-5">{desc}</p>
          <div className="card-actions justify-end text-orange-500 -my-5">
            <Link className="btn btn-ghost" to={link}>
              Lihat selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}
