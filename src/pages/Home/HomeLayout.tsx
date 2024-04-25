import React from "react";

import Navbar from "../../containers/Navbar/Navbar";
import { HomeLayoutProps } from "./HomeLayout.types";
import styles from "./HomeLayout.module.css";

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
