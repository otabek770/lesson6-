
import { useEffect, useState } from 'react'
import './App.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import { getStore,getUser } from './component/main'
import { uid } from 'uid'
import Products from './component/Products'
import Add from './component/Add'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ProtectedRoute from './component/ProtectedRoute'

function App() {

const id=uid();

const [login,setLogin] = useState (false)
const [name,setName] = useState ('')
const [email,setEmail] = useState ('')

const [pname,setPname]=useState('')
const [price,setPrice]=useState('');

const [editId,setEditId] = useState (null);

const [edit,setEdit] = useState (false);

const [ user,setUser] = useState(getUser('user'));
const [ products,setProducts] = useState(getStore('products'));

const handleSubmit = () => {
  const newUser = {id:id,uname:name,uemai:email};
  setUser(newUser);
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
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('products',JSON.stringify(products));
   
  },[user,products])


  return (
    <>
      <h2 className='title'>{user.uname && "Welcome to "}{user.uname}</h2>
      <Navbar login={login} setLogin={setLogin}/>
      
      <Routes>


     <Route path='login' element={login && <Login
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      />}
      />
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/products' element={
      <ProtectedRoute user={user}> 
          <Products
       editItem={editItem} 
       setEdit={setEdit} 
       products={products} 
       deleteItem={deleteItem}
       />
        </ProtectedRoute>} />
      
        <Route path='/Add' element={<Add 
            editItem={editItem}
            edit={edit}
            setEdit={setEdit} 
            pname={pname} 
            setPname={setPname}
            price={price}
            setPrice={setPrice} 
            addProduct={addProduct}
            />
          } 
            />
          <Route path='*' element={<Error/>} />
      </Routes>
      
    </>
  )
}

export default App
