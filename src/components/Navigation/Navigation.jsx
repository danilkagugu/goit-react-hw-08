import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, css.img, isActive && css.active);
};

const Navigation = () => {
  const isLogin = useSelector(selectIsSignedIn);
  return (
    <div className={css.header}>
      <nav className={css.userMenu}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>

        {isLogin && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
