

export default function Products({editItem,products,deleteItem}) {
  return (
    <div className="Praduct">
      {products.map((item)=>{
        return (
            <div className="praduct-box" key={item.id}>
            <h2 >{item.name}</h2>
            <h2>{item.price}</h2>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() =>editItem(item.id)}>Edit</button>
        </div>
        ) 
      })}
    </div>
  )
}
