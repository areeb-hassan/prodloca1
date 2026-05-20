import { Link } from 'react-router-dom'

const links = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/Gallery" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center px-12 py-6 bg-black/60 backdrop-blur-md z-50">
      <div className="flex items-center gap-15 mx-auto">
<ul className="flex items-center gap-14 text-xs tracking-[0.35em] uppercase text-white/50">
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className="hover:text-white transition-colors duration-200">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav