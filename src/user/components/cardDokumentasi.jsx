import React from 'react'

export default function CardDokumentasi({ img, title, link }) {
  return (
    <>
      <div className="card shadow-2xl justify-center">
        <img className="object-cover w-58 h-58 mx-auto" src={img} alt=' foto jelek' />
        <div className="card-body font-poppins -mx-3">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize text-center line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
    </>
  )
}
