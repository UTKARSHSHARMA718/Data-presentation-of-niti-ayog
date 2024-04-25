import React from "react";

import List from "../../components/List/List";
import NavItem from "../../components/NavItem/NavItem";
import Logo from "../../assets/images/Data analysis logo.png";
import { NAVBAR_ITEMS } from "../../constant/const";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const allPropsKeys = ["label", "onClick"];

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={Logo} alt="Company-Logo" className={styles.img} />
      </div>
      <List 
        data={NAVBAR_ITEMS} 
        component={NavItem} 
        {...{ allPropsKeys }} 
      />
    </div>
  );
};

export default Navbar;
