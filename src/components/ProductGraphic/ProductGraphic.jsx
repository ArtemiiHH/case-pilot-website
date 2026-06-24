import styles from "./ProductGraphic.module.css";
import dashboardGraphic from "../../images/dashboard-graphic-noshadow.png";

export default function ProductGraphic() {
  return (
    <div className={styles.container}>
      <img
        className={styles.graphic}
        src={dashboardGraphic}
        alt="CasePilot dashboard"
      />
    </div>
  );
}
