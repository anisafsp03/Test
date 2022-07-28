import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useParams } from 'react-router-dom'
import NavbarLogin from '../components/navbarlogin'
import { useLocation } from 'react-router-dom'

export default function DetailArtikelPage() {
  const [artikel, setArtikel] = useState([])
  const [user, setUser] = useState()

  const usePathname = () => {
    const location = useLocation()
    return location.pathname
  }
  console.log(usePathname)

  let { slug } = useParams()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('credential')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  useEffect(() => {
    axios.get(`http://api-dinas.duniadev.com/api/news/${slug}`).then((res) => {
      const fetch = res.data.data[0]
      setArtikel(fetch)
    })
  }, [artikel])

  

  return (
    <div className="bg-white">
      {user ? <NavbarLogin /> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <h1 className="font-montserrat text-center font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-5 lg:mb-12">
          {artikel.title}
        </h1>
        <img className="mx-auto mb-5" src={artikel.gambar} alt="gambar" />
        <div className="grid grid-cols-1 lg:grid-cols-1  lg:mx-12">
          <div
            className="col-span-3 lg:mt-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="font-poppins text-xs lg:text-sm whitespace-pre-line align-bottom">
              {artikel.body}
            </div>
          </div>
          {/* <div
            className="col-span-2 my-8 lg:my-8 font-poppins lg:ml-8"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="bg-dark-green p-3 w-full text-white capitalize mb-3">
              rekomendasi artikel untuk kamu
            </div>
            {rekArtikel.slice(0, 3).map((artikel) => (
              <div className="my-3">
                <CardArtikel
                  key={artikel.url}
                  img={artikel.gambar}
                  title={artikel.title}
                  desc={artikel.body}
                  link={`/artikel/${artikel.url}`}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
