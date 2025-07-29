import styles from "../components/Logo.module.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/" className={styles.logoBox}>
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
      <span className={styles.logoText}>GlobeTrackr</span>
    </Link>
  );
}

export default Logo;
