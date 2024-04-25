import { InfoLineProps } from "./InfoLine.types";
import styles from "./InfoLine.module.css";

const InfoLine: React.FC<InfoLineProps> = ({ text, icon: Icon, size = 20 }) => {
    
  return (
    <div className={styles.container}>
      <Icon {...{ size }} className={styles.icon} />
      <div>
        <p className={styles.container}>{text}</p>
      </div>
    </div>
  );
};

export default InfoLine;
