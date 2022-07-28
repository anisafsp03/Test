export default function CardTim({img, title, position, desc}) {
  return (
    <>
      <div className="card text-center shadow-2xl justify-center">
        <img className="object-cover" src={img} className="rounded-lg"/>
        <div className="card-body font-poppins">
          <h3 className="card-title font-montserrat text-sm -mt-3 capitalize">{title}</h3>
          <p className='text-xs -mt-3 mb-4'>{position}</p> 
          <p className='text-xs'>{desc}</p> 
        </div>
      </div> 
    </>
  )
}