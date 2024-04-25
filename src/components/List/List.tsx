import React from "react";

import { ListProps } from "./List.types";
import styles from './List.module.css';

const List: React.FC<ListProps> = ({data, component:Component, allPropsKeys=[]}) => {
    const getProps=(itemData: any)=>{
        const props:any={};
        allPropsKeys?.forEach(key=>{
            props[key]=itemData[key];
        })
        return props;
    }

  return (
    <ul className={styles.listContainer}>
      {data?.map((item,index) => {
        return <Component {...getProps(item)} key={index}/>;
      })}
    </ul>
  );
};

export default List;
