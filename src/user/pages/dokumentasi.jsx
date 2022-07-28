import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NavbarLogin from '../components/navbarlogin'
import CardDokumentasi from '../components/cardDokumentasi'

export default function DokumentasiPage() {
  const [dokumentasi, setDokumentasi] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('credential')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  useEffect(() => {
    axios
      .get('http://api-dinas.duniadev.com/api/documentations')
      .then((res) => {
        const fetch = res.data.data
        setDokumentasi(fetch)
      })
  }, [])

  return (
    <div className="bg-white">
      {user ? <NavbarLogin /> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center lg:text-left font-bold font-montserrat text-dark-green text-xl lg:text-4xl capitalize">
            Dokumentasi Kegiatan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black gap-6 px-5 my-6 lg:my-12">
            {dokumentasi.map((dokumentasi) => (
              <CardDokumentasi
                key={dokumentasi.id}
                img={dokumentasi.gambar}
                title={dokumentasi.judul}
                link={`/dokumentasi/${dokumentasi.id}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
