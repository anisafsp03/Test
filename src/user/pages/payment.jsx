import { Link, useHistory } from "react-router-dom"
import Button from "../components/button"
import Footer from "../components/footer"
import NavbarLogin from "../components/navbarlogin"
import payment from "../images/payment.gif"
import { useState, useEffect } from "react"

export default function Payment() {
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
          <img src={payment} alt='403' className="lg:w-6/12 mb-2"/>
          <h1 className="font-montserrat font-bold text-xl lg:text-4xl text-center">Yey! Pembayaran Kamu <span className="text-dark-green font-bold">Sedang Diproses!</span></h1>
          <p className="font-poppins text-sm lg:text-xl text-center my-5 px-2">Silahkan selesaikan pembayaranmu pada window/tab yang muncul di browser kamu ya! (jangan lupa pop-up nya jangan di blokir 😁) </p>
          <p className="font-poppins text-sm lg:text-xl text-center mb-5 px-2">Kalau sudah, ayo kita lanjut untuk melakukan penjadwalan konsultasi dengan psikolog pilihan kamu!</p>
          <Link to='/jadwal-konsultasi'>
            <Button def='default' type='pilihPaket'>Buat Jadwal Konsultasi</Button>
          </Link>
        </div>
        <Footer />
        </div>}
    </div>
  )
}