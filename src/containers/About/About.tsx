import InfoLine from "../../components/InfoLine/InfoLine";
import List from "../../components/List/List";
import { ABOUT_SECTION_POINTS } from "../../constant/const";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>About section:</p>
      </div>
      <List
        data={ABOUT_SECTION_POINTS}
        component={InfoLine}
        allPropsKeys={["text", "icon"]}
        customListContainerStyles={styles.listContainer}
      />
    </div>
  );
};

export default About;
