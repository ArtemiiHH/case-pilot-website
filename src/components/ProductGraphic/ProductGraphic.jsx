import styles from "./ProductGraphic.module.css";
import dashboardGraphic from "../../images/dashboard-graphic-noshadow.png";
import dashboardGraphicTwo from "../../images/dashboard-graphic2.png";

export default function ProductGraphic() {
  return (
    <div className={styles.container}>
      <img
        className={styles.graphicTwo}
        src={dashboardGraphicTwo}
        alt="CasePilot dashboard"
      />
    </div>
  );
}
