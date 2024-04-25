import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../containers/Navbar/Navbar";
import styles from "./HomeLayout.module.css";

const HomeLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
