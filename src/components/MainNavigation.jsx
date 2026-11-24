import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse_books" end>
              Browse
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/authentication?mode=login" end>
              Login
            </NavLink>
          </li>
          {/* logout button TODO */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;