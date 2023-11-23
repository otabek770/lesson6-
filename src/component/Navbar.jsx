

export default function Navbar({login,setLogin}) {
  return (
    <div className="nav">
      <ul className="list">
        <li>home</li>
        <li>about</li>
        <li>Products</li>
        <li>
            <button className="btn" onClick={() => setLogin(!login)}>Login</button>
            </li>
      </ul>
    </div>
  )
}
