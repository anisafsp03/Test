import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CardKomWeb from '../components/cardKomWeb'
import NavbarLogin from '../components/navbarlogin'

export default function KoleksiPage() {
  const [Koleksi, setKoleksi] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('credential')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  useEffect(() => {
    axios.get('http://api-dinas.duniadev.com/api/collections').then((res) => {
      const fetch = res.data.data
      setKoleksi(fetch)
    })
  }, [])

  return (
    <div className="bg-white">
      {user ? <NavbarLogin /> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center lg:text-left font-bold font-montserrat text-dark-green text-xl lg:text-4xl capitalize">
            Koleksi Museum
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-6 px-5 my-6 lg:my-12">
            {Koleksi.map((Koleksi) => (
              <CardKomWeb
                key={Koleksi.id}
                img={Koleksi.gambar}
                link={`/Koleksi/${Koleksi.id}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
