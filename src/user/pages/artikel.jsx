import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import NavbarLogin from "../components/navbarlogin"
import Footer from "../components/footer";
import CardArtikel from "../components/cardArtikel";

export default function ArtikelPage() {
  const [artikel, setArtikel] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get("http://api-dinas.duniadev.com/api/news")
    .then (res => {
      const fetch = res.data.data
      setArtikel(fetch)
       console.log(res)
    })
  },[])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);



  return (
    <div className="bg-white">
      {user ? <NavbarLogin /> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center lg:text-left font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">artikel menarik untuk kamu</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-5 text-black lg:my-8'>
            {artikel.map((artikel) => (
              <CardArtikel key={artikel.url} img={artikel.gambar} title={artikel.title} desc={artikel.body} link={`/artikel/${artikel.url}`}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}