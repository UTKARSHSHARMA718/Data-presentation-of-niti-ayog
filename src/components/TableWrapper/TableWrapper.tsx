import CustomTable from "../Table/CustomTable";
import { TableWrapperProps } from "./TableWrapper.types";
import styles from "./TableWrapper.module.css";

const TableWrapper:React.FC<TableWrapperProps> = ({ title, data, tableHeaders, tableDataKeys }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>{title}</p>
      </div>
      <div className={styles.tableContainer}>
        <CustomTable {...{ data, tableHeaders, tableDataKeys }} />
      </div>
    </div>
  );
};

export default TableWrapper;
