import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="navInner">
        <div className="brand">Qualia</div>
        <nav className="links">
          <NavLink to="/todos" className={({ isActive }) => (isActive ? "active" : "")}>
            Todos
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}