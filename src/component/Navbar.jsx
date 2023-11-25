import { Link } from "react-router-dom";

export default function Navbar({login,setLogin}) {
  return (
    <div className="nav">
      <ul className="list">
        <li>
        <Link to='/'>
          Home 
          </Link>
          </li>
        <li>
          <Link to='/about'>
          About
          </Link>
          </li>
        <li>
          <Link to='/products'>
          Products
          </Link>
          </li>

          <li>
          <Link to='/service'>
          Service
          </Link>
          </li>

          <li>
          <Link to='/Add'>
          <button>Add</button>
          </Link>
          </li>

        <li>
          <Link to='/login'>
            <button className="btn" onClick={() => setLogin(!login)}>Login</button>
          </Link>
            </li>
            {/* <li>
          <Link to='*'>
          <button>Error</button>
          </Link>
          </li> */}
      </ul>
    </div>
  )
}
