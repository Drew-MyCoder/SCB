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
    <header>
        <h1>SCB</h1>
        <nav>
            <NavLink to='/ministries'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                Ministries
            </NavLink>
            <NavLink to='/about'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                About
            </NavLink>
            <NavLink to='/events'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                Events
            </NavLink>
            <NavLink to='/donations'
                    style={({isActive}) => isActive ? activeStyle : noStyle}>
                Donations
            </NavLink>
        </nav>
    </header>
  )
}
