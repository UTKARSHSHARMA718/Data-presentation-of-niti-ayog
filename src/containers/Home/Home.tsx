import { useMemo } from "react";

import TableWrapper from "../../components/TableWrapper/TableWrapper";
import {
  getArrayOfObjectsFromMap,
  getCropAvgYieldAndCultivation,
  getCropWithMaxMinProductionInAYear,
} from "../../utils/util";
import {
  cropAvgYieldAndCultivationDataKeys,
  cropAvgYieldAndCultivationTableHeaders,
  cropMinMaxDataKeys,
  cropMinMaxtableHeaders,
} from "../../constant/const";
import styles from "./Home.module.css";

const Home = () => {
  const minMaxCropData = useMemo(
    () => getCropWithMaxMinProductionInAYear(),
    []
  );

  const yearCropMinMaxObjArray = useMemo(
    () => getArrayOfObjectsFromMap(minMaxCropData),
    []
  );

  const avgCropYieldAndCultivation = useMemo(
    () => getCropAvgYieldAndCultivation(),
    []
  );

  console.log({ avgCropYieldAndCultivation });

  const avgCropYieldAndCultivationObjArray = useMemo(
    () => getArrayOfObjectsFromMap(avgCropYieldAndCultivation),
    []
  );

  return (
    <div className={styles.container}>
      <TableWrapper
        title={"Data of maximum and minimum crop per year"}
        data={yearCropMinMaxObjArray}
        tableHeaders={cropMinMaxtableHeaders}
        tableDataKeys={cropMinMaxDataKeys}
      />
      <TableWrapper
        title={"Data of average crop yield and cultivation per year"}
        data={avgCropYieldAndCultivationObjArray}
        tableHeaders={cropAvgYieldAndCultivationTableHeaders}
        tableDataKeys={cropAvgYieldAndCultivationDataKeys}
      />
    </div>
  );
};

export default Home;
