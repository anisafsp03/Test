import { Link } from "react-router-dom"
import { edit } from "../icons"

export default function SidebarProfil() {
  return (
    <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg text-black">
      <div className="mb-4">
        <h1 className="text-dark-green text-xl lg:text-3xl capitalize font-montserrat font-bold">Menu</h1>
      </div>
      <div className="capitalize text-xs lg:text-base hover:text-dark-green">
        <Link to='/profil'>Profil saya</Link>
      </div>
      <div className="capitalize text-xs lg:text-base mt-1 hover:text-dark-green">
        <Link to='/edit-profil'>edit profil</Link>
      </div>
      <div className="capitalize text-xs lg:text-base mt-1 hover:text-dark-green">
        <Link to='/ganti-password'>ganti password</Link>
      </div>
    </div>
  )
}