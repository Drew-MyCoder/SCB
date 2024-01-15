import { NavLink, Outlet } from "react-router-dom"




export const About = () => {
  const activeLink = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616',
    }
    const noStyle = {
      fontWeight: 'none',
      TextDecoration: 'none',
  }
 return (
    <>
    <nav className="flex px-3">
        <NavLink to='.'
            end
            style={({isActive}) => isActive ? activeLink : noStyle}>
            Executives</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : noStyle}
          to="events">
          Events</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : noStyle}
          to="donations">
          Donations</NavLink>
    </nav>
    <Outlet />
    </>
  )
}

