import { Fragment } from "react";
import styles from "./ProductGraphic.module.css";
import dashboardGraphic from "../../images/dashboard-graphic.png";

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
