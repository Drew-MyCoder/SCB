import { NavLink, Outlet } from "react-router-dom"


export const Ministries = () => {
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
    <nav className="flex px-60">
        <NavLink to='.'
            end
            style={({isActive}) => isActive ? activeLink : noStyle}>
            Sermon</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : noStyle}
          to="prayer">
          Prayer Resquest</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeLink : noStyle}
          to="testimony">
          Testimony</NavLink>
    </nav>
    <Outlet />
    </>
  )
}
