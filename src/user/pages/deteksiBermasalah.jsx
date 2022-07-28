import { Link, useHistory } from "react-router-dom"
import Button from "../components/button"
import Footer from "../components/footer"
import NavbarLogin from "../components/navbarlogin"
import search from "../images/search.gif"
import { useState, useEffect } from "react"

export default function HasilDeteksi() {
  const [user, setUser] = useState()
  const history = useHistory()
  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      history.push('/login')
    }
  }, []);

  return (
    <div className="bg-white text-black">
      {user && <div>
        <NavbarLogin />
        <div className="flex flex-col items-center justify-center w-11/12 bg-white mx-auto py-8 border-2 border-dark-green rounded-3xl my-6 lg:my-12">
          <img src={search} alt='403' className="lg:w-6/12 mb-2"/>
          <h1 className="font-montserrat font-bold text-xl lg:text-4xl">Kamu terdeteksi <span className="text-dark-green font-bold">Butuh Bantuan!</span></h1>
          <p className="font-poppins text-sm lg:text-xl text-center my-5 px-2">Sepertinya kamu membutuhkan bantuan dari psikolog kami secepatnya! yuk segera lanjutkan untuk konsultasi! </p>
          <Link to='/konsultasi'>
            <Button def='default' type='pilihPaket'>Lanjutkan Konsultasi</Button>
          </Link>
          <Link to='/' className="my-4">
            <Button def='default' type='homeDeteksi'>Kembali ke Beranda</Button>
          </Link>
        </div>
        <Footer />
        </div>}
    </div>
  )
}