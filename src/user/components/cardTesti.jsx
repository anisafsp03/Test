
import React from 'react'

export default function CardOrganisasi({ nama, link, nip, jk, alamat, agama, jabatan, TTL, TL }) {
  return (
    <>
      <div className="card shadow-2xl justify-center">
        {/* <img className=" w-58 h-58 mx-15" src={img} /> */}
        <div className="card-body font-poppins -mx-3">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize text-center line-clamp-2">
            {nama}
          </h3>
          <h2 className="card-title font-montserrat text-sm -mt-3 capitalize text-center line-clamp-2">
            {nip}
          </h2>
          <h2 className="card-title font-montserrat text-sm -mt-3 capitalize text-center line-clamp-2">
            {jk}
          </h2>

        </div>
      </div>
    </>
  )
}
