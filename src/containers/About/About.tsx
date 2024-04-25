import InfoLine from "../../components/InfoLine/InfoLine";
import List from "../../components/List/List";
import { ABOUT_SECTION_POINTS } from "../../constant/const";

const About = () => {
  return (
    <div>
      <div>
        <p>About section:</p>
      </div>
      <List
        data={ABOUT_SECTION_POINTS}
        component={InfoLine}
        allPropsKeys={["text", "icon"]}
      />
    </div>
  );
};

export default About;
