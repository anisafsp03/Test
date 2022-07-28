import CardArtikel from "../components/cardArtikel";
import CardDokumentasi from "../components/cardDokumentasi";
import CardKomWeb from "../components/cardKomWeb";
import CardPaket from "../components/cardPaket";
import CardPsikolog from "../components/cardPsikolog";
import CardTestimoniPsikolog from "../components/cardTesti";
import CardTim from "../components/cardTimKami";

export default function Save() {
  return (
    <>
      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5'>
          <CardPaket />
        </div>
      </div>
      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-5'>
          <CardArtikel />
        </div>
      </div>

      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5'>
          <CardKomWeb />
        </div>
      </div>

      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
          <CardPsikolog/>
        </div>
      </div>

      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 p-5'>
          <CardTestimoniPsikolog />
        </div>
      </div>

      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5'>
          <CardTim />
        </div>
      </div>

      <div className='bg-white text-black'>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5'>
          <CardDokumentasi />
        </div>
      </div>
    </>
  )
}