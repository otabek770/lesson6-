
import { useEffect, useState } from 'react'
import './App.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import { getStore } from './component/main'
import { uid } from 'uid'
import Products from './component/Products'
import Add from './component/Add'

function App() {

const id=uid();

const [login,setLogin] = useState (false)
const [name,setName] = useState ('')
const [email,setEmail] = useState ('')

const [pname,setPname]=useState('')
const [price,setPrice]=useState('');

const [editId,setEditId] = useState (null);

const [edit,setEdit] = useState (false);

const [ users,setUsers] = useState(getStore('users'));
const [ products,setProducts] = useState(getStore('products'));

const handleSubmit = () => {
  const newUser = {id:id,uname:name,uemai:email};
  setUsers(newUser);
}

const addProduct = () => {
  if (!pname && !price) {
    console.log('err');
  } else if (pname && edit) {
    setProducts(products.map((item) =>{
      if(item.id === editId){
        return{...item,name:pname,price:price}
      }
      return item
    }))
  }else{
    const newProduct ={id:id,name:pname,price:price}
    setProducts ([...products,newProduct])
  }
  }
 

const deleteItem = (id) =>{
  const newItem = products.filter((item) => item.id !==id)
  setProducts(newItem)
}
const editItem = (id) => {
  const newItem = products.find((item) =>item.id ===id);
  setEdit(true);
  setEditId(id);
  setPname(newItem.name)
  setPrice(newItem.price)
}


  useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users));
    localStorage.setItem('products',JSON.stringify(products));
   
  },[users,products])


  return (
    <>
      <h2 className='title'>{users.uname && "Welcome  "}{users.uname}</h2>
      <Navbar login={login} setLogin={setLogin}/>
      {login && <Login
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      />}
      <Products editItem={editItem} setEdit={setEdit} products={products} deleteItem={deleteItem}/>
      <Add editItem={editItem} edit={edit} setEdit={setEdit} pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={addProduct}/>
      
    </>
  )
}

export default App
