import { NavLink } from "react-router-dom"


export const Navbar = () => {
    const activeStyle = {
        fontWeight: 'bold',
        TextDecoration: 'underline',
        color: '#161616'
    }
    const noStyle = {
        fontWeight: 'none',
        TextDecoration: 'none',
    }

  return (
    <header className="p-1 flex justify-center items-center">
        <h1>SCB</h1>
        <nav className="bg-white">
            <NavLink to='/'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                Home
            </NavLink>
            <NavLink to='/ministries'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                Ministries
            </NavLink>
            <NavLink to='/about'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                About
            </NavLink>
            
        </nav>
    </header>
  )
}
