import { NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/bio', label: 'Bio' },
  { to: '/credits', label: 'Credits' },
  { to: '/contact', label: 'Contact' },
]

// White text with difference blending reads white over photos and black over the page.
export function Nav() {
  return (
    <nav className="fixed right-0 top-0 z-50 px-3 py-3 text-white mix-blend-difference md:px-5 md:py-4">
      <ul className="flex gap-3 text-[0.8125rem] font-semibold uppercase tracking-[-0.01em] md:gap-4 md:text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end
              className={({ isActive }) =>
                `border-b-2 pb-0.5 transition-colors ${isActive ? 'border-current' : 'border-transparent hover:border-current'}`
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// The name line across the middle of the home photo slider
export function MidLine() {
  return (
    <div
      aria-hidden="true"
      className="label pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-3 text-white md:px-5"
    >
      <span>Mike</span>
      <span>Mixing Engineer</span>
      <span>Seaberg</span>
    </div>
  )
}
