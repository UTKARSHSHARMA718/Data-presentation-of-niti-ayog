import React from "react";
import { useNavigate } from "react-router-dom";

import List from "../../components/List/List";
import NavItem from "../../components/NavItem/NavItem";
import useNavbar from "./controllers/useNavbar";
import Logo from "../../assets/images/Data analysis logo.png";
import { HOME } from "../../constant/routeNames";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const { NAVBAR_ITEMS } = useNavbar();
  const navigate = useNavigate();
  const allPropsKeys = ["label", "onClick"];

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={Logo}
          alt="Company-Logo"
          className={styles.img}
          onClick={() => navigate(HOME)}
        />
      </div>
      <List data={NAVBAR_ITEMS} component={NavItem} {...{ allPropsKeys }} />
    </div>
  );
};

export default Navbar;
