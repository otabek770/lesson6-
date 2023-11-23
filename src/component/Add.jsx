

export default function Add({edit,pname,setPname,price,setPrice,addProduct}) {
  return (
    <div className="container">
      <form action="" onSubmit={addProduct}>
        <input 
        type="text" 
        name="" 
        id="" 
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        /> <br />
        <input 
        type="text" 
        name="" 
        id="" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        /> <br />
        <button className="btn1" >
            {edit ?'edit':'add'}
        </button>
      </form>
    </div>
  )
}
