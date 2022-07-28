export default function ProfilData({name, email, email_ortu, birthdate, no_hp}) {
  return (
    <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
      <div className="mb-8">
        <h1 className="text-dark-green text-xl lg:text-3xl capitalize font-montserrat font-bold">profil saya</h1>
      </div>
      <div className="grid grid-cols-7 text-black">
        <div className="col-span-2 lg:col-span-2 capitalize text-xs lg:text-base">
          <p>Nama</p>
        </div>
        <div className="col-span-5 lg:col-span-5 text-xs lg:text-base">
          <p>: {name}</p>
        </div>
        <div className="col-span-2 lg:col-span-2 capitalize text-xs lg:text-base">
          <p>Tanggal Lahir</p>
        </div>
        <div className="col-span-5 lg:col-span-5 text-xs lg:text-base">
          <p>: {birthdate.split('T').slice(0, 1).toString().split("-").reverse().join("-")}</p>
        </div>
        <div className="col-span-2 lg:col-span-2 capitalize text-xs lg:text-base">
          <p>Telepon</p>
        </div>
        <div className="col-span-5 lg:col-span-5 text-xs lg:text-base">
          <p>: {no_hp}</p>
        </div>
        <div className="col-span-2 lg:col-span-2 capitalize text-xs lg:text-base">
          <p>Email</p>
        </div>
        <div className="col-span-5 lg:col-span-5 text-xs lg:text-base">
          <p>: {email}</p>
        </div>
        <div className="col-span-2 lg:col-span-2 capitalize text-xs lg:text-base">
          <p>Email ortu</p>
        </div>
        <div className="col-span-5 lg:col-span-5 text-xs lg:text-base">
          <p>: {email_ortu}</p>
        </div>
      </div>
    </div>
  )
}