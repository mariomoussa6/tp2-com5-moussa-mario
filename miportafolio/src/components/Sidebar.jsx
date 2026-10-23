import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mario Dev</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'activo' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'activo' : ''}>Sobre mí</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'activo' : ''}>Habilidades</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'activo' : ''}>Proyectos</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'activo' : ''}>Contacto</NavLink>
      </nav>
    </aside>
  );
}