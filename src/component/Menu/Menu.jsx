import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.png";
import { useContext } from "react";
import { CartContext } from "../CartData/CartData";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Menu = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();

    const {cart, setCart} = useContext(CartContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            console.log('log out')
            navigate('/signin')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    let total = 0;

  for (const totalPrice of cart) {
    total = total + totalPrice.price;
  }

  const mainPrice = (30 * total) / 100;
  const totalPrice = total - mainPrice;

    const navLink = (
        <>
          <li className="mx-1 mb-1 lg:mb-0">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-1 mb-1 lg:mb-0">
            <NavLink to="/store">Products</NavLink>
          </li>
          <li className="mx-1 mb-1 lg:mb-0">
            <NavLink to="/category">Categories</NavLink>
          </li>
          <li className="mx-1 mb-1 lg:mb-0">
            <NavLink to="/custom">Custom</NavLink>
          </li>
          <li className="mx-1 mb-1 lg:mb-0">
            <NavLink to="/Blog">Blog</NavLink>
          </li>
        </>
      );
    return (
        <div>
            <header>
        <div className="navbar bg-base-100 border-b-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <span className="btn btn-ghost text-xl">
              <img src={logo} alt="" />
            </span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
          <div className="navbar-end">
            {
                user ? <p>{user.displayName}</p> : ''
            }
            <div className="flex items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                
                  <div className="indicator">
                    
                    <TbShoppingBag size={25} />
                    <span className="badge badge-sm indicator-item">{cart.length}</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">{cart.length} Items</span>
                    <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        <Link to={'/cart'}>View Cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="rounded-full">
                    {/* <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    /> */}
                    <CgProfile size={25} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    {
                        user ? <a onClick={handleLogOut}>Logout</a> : ''
                    }
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
        </div>
    );
};

export default Menu;