import phoneImg from "../../img/phone.jpg";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1>Welcome to the contact book!</h1>
      <img src={phoneImg} alt="Phone" width="400" />
    </div>
  );
};

export default HomePage;
