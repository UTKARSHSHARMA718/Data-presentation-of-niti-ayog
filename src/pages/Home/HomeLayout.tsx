import React from "react";

import Navbar from "../../containers/Navbar/Navbar";
import { Outlet } from "react-router-dom";
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
