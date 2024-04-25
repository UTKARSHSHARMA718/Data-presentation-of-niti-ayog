import React from "react";

import { NavItemProps } from "./NavItem.types";
import styles from './NavItem.module.css';

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {

  return (
    <li {...{ onClick }} className={styles.container}>
      <p>{label}</p>
    </li>
  );
};

export default NavItem;
