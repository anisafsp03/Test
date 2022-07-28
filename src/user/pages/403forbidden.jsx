import { Link } from "react-router-dom"
import Button from "../components/button"
import forbidden from "../images/403.png"

export default function Forbidden() {
  return (
    <div className="bg-dark-green py-16 lg:py-12 h-screen lg:h-auto text-black">
      <div className="flex flex-col items-center justify-center w-11/12 bg-white mx-auto py-8">
        <img src={forbidden} alt='403' className="lg:w-4/12 mb-2"/>
        <h1 className="font-montserrat font-bold text-xl lg:text-4xl">Akses Dilarang</h1>
        <p className="font-poppins text-sm lg:text-xl text-center my-5 px-2">Ups, maaf ya kamu tidak diizinkan untuk mengakses halaman ini.<br></br> Kita kembali ke beranda saja, yuk!</p>
        <Link to='/'>
          <Button def='default' type='pilihPaket'>Kembali ke Beranda</Button>
        </Link>
      </div>
    </div>
  )
}