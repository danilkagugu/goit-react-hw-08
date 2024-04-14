import { useSelector } from "react-redux";
import {
  selectIsRefreshing,
  selectIsSignedIn,
} from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <header className={css.header}>
      <Navigation />
      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
};

export default AppBar;
