import profil from "../images/doctor.png"

export default function DataKonsultasi({name}) {
  return (
    <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
      <div className="font-poppins text-black">
        <h1 className="text-dark-green text-center text-xl lg:text-3xl capitalize font-montserrat font-bold">konsultasi yang sedang diikuti </h1>
        <img src={profil} className="w-72 mx-auto my-4"/>
        <p className="text-xs lg:text-base text-center">Konsultasi masalah <span className="text-dark-green font-bold">kesehatan mental </span>dengan</p>
        <p className="capitalize text-xs lg:text-base text-center">{name}</p>
      </div>
    </div>
  )
}