import styles from "./User.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
const FAKE_USER = {
  name: "Wahid",
  email: "wahidkeo@gmail.com",
  password: "qwerty",
  avatar: "/user.jpeg",
};

function User() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const user = FAKE_USER;

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;


