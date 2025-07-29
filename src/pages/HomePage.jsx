import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Track Every Step of Your <span>Journey</span></h1>
          <p>
            From hidden gems to iconic landmarks GlobeTrackr helps you log,
            revisit, and relive your adventures.
          </p>
          <Link to="/login" className="cta">
            Start tracking now
          </Link>
        </div>
        <div className={styles.heroImg}>
          <img src="/2151064533-removebg-preview.png" />
        </div>
      </section>
    </main>
  );
}
