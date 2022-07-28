export default function SoalDeteksi({name, soal, onChange}) {
  return (   
    <div className="card lg:card-side bg-light-green text-black mb-5">
      <div className="card-body">
        <p>{soal}</p> 
        <div className="card-actions justify-center">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="text-xs lg:text-sm mr-2 lg:mr-4">tidak pernah</span>
              <input type="radio" name={name} className="radio radio-xs lg:radio-md radio-accent mr-2 lg:mr-4" value="1" onChange={onChange}/>
              <input type="radio" name={name} className="radio radio-xs lg:radio-md radio-accent mr-2 lg:mr-4" value="2" onChange={onChange}/>
              <input type="radio" name={name} className="radio radio-xs lg:radio-md radio-accent mr-2 lg:mr-4" value="3" onChange={onChange}/>
              <input type="radio" name={name} className="radio radio-xs lg:radio-md radio-accent mr-2 lg:mr-4" value="4" onChange={onChange}/>
              <input type="radio" name={name} className="radio radio-xs lg:radio-md radio-accent mr-2 lg:mr-4" value="5" onChange={onChange}/>
              <span className="text-xs lg:text-sm">selalu</span>
            </label>
          </div> 
        </div>
      </div>
    </div>
  )
}