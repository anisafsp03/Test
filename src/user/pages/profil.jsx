import { useState, useEffect } from "react";
import Footer from "../components/footer";
import { useHistory } from "react-router-dom";
import ProfilData from "../components/dataProfil";
import DataKonsultasi from "../components/dataKonsultasi";
import NavbarLogin from "../components/navbarlogin";
import SidebarProfil from "../components/sidebarProfil";
import axios from "axios";

export default function ProfilPage() {  
  const [user, setUser] = useState()
  const [psikolog, setPsikolog] = useState()
  const [dataKonsultasi, setDataKonsultasi] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser.data);
    } else {
      history.push('/login')
    }
  }, []);

  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/konsultasi")
    .then (res => {
      const fetch = res.data
      const data = fetch.find(e => e.email === user.email)
      if(data) {
        setDataKonsultasi(true)
        setPsikolog(data.psikolog[0].name)
      } else {
        setDataKonsultasi(false)
      }
    })
  })

  return (
    <div>
    {user &&
      <div className="bg-white">
        <NavbarLogin />
        <div className="container mx-auto px-4 my-12">
          <div className="grid grid-cols-12 text-dark-green px-4">
            <div className="col-span-3 lg:col-span-2">
              <img src={user.profpic} className="rounded-full"/>
            </div>
            <div className="col-span-9 lg:col-span-10 flex items-center ml-2 lg:ml-8">
              <h1 className="text-xl lg:text-3xl inline-block font-montserrat font-bold ml-4">{user.name}</h1>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-3 my-12">
              <SidebarProfil/>
            </div>
            <div className="col-span-9 ml-2 lg:ml-5">
              <div className="mt-12 mb-4 lg:my-12">
                <ProfilData name={user.name} birthdate={user.birthdate} email={user.email} email_ortu={user.email_Ortu} no_hp={user.no_hp}/>
              </div>
              <div>
                {dataKonsultasi ? <DataKonsultasi name={psikolog}/> : <div>Belum ada data</div>}            
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>}
    </div>
  )
}
