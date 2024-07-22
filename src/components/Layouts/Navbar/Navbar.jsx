import './Navbar.css'

export const Navbar = ({children}) => {
  return (
    <nav>
        <ul className="ulNav">
        {children}
        </ul>
    </nav>
  )
}
