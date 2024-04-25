import { CROPS_DATA } from "../constant/cropsData";

type CropMinMaxMapValueType = {
  minCropName: string;
  maxCropName: string;
  minCropProduction: number;
  maxCropProduction: number;
};

export const getCropWithMaxMinProductionInAYear = () => {
  const cropMinMaxDataYearWise = new Map<number, CropMinMaxMapValueType>();

  CROPS_DATA?.forEach((crop) => {
    const currentCropProduction = +(
      crop?.["Crop Production (UOM:t(Tonnes))"] || 0
    );
    const currentCropYear = +(crop?.Year?.split(",")[1] || 0);
    const currentCropName = crop?.["Crop Name"];

    // check does the current year has aleardy occured,
    // if yes, then we should compare the data of min and max crop of already stored data with the currentData
    if (cropMinMaxDataYearWise?.has(currentCropYear)) {
      const mapObj = cropMinMaxDataYearWise?.get(currentCropYear)!;

      // if the currentCropProduction is greater than already stored data of max crop then
      // just update the values for max crop name and production
      if (currentCropProduction > mapObj.maxCropProduction) {
        mapObj.maxCropProduction = currentCropProduction;
        mapObj.maxCropName = currentCropName;
      }

      // if the currentCropProduction is lesser than already stored data of min crop then
      // just update the values for min crop name and production
      if (currentCropProduction < mapObj.minCropProduction) {
        mapObj.minCropProduction = currentCropProduction;
        mapObj.minCropName = currentCropName;
      }

      //at last just update the object for current crop year
      cropMinMaxDataYearWise.set(currentCropYear, mapObj);
    } else {
      // if no, then we should just set the data fro current year.
      // and since this is the first time this 'year' is ocuured we should set
      // the min and max production and crop name same as of current crop data
      cropMinMaxDataYearWise.set(currentCropYear, {
        minCropName: currentCropName,
        maxCropName: currentCropName,
        minCropProduction: currentCropProduction,
        maxCropProduction: currentCropProduction,
      });
    }
  });

  return cropMinMaxDataYearWise;
};

type CropAvgYieldAndCultivationType = {
  totalYield: number;
  totalCultivation: number;
  numberOfYears: number;
  avgYield: number;
  avgCulitvation: number;
};

export const getCropAvgYieldAndCultivation = () => {
  const perCropTotalYieldAndCultivation = new Map<
    string,
    CropAvgYieldAndCultivationType
  >();

  CROPS_DATA?.forEach((crop) => {
    const currentCropName = crop?.["Crop Name"];
    const currentCropYield = +(
      crop?.["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0
    );
    const currentCropCultivation = +(
      crop?.["Area Under Cultivation (UOM:Ha(Hectares))"] || 0
    );

    // checking does the crop has already occured or not.
    // if yes, then updated the value of number of years, total crop yield and total crop cultivation
    if (perCropTotalYieldAndCultivation?.has(currentCropName)) {
      let cropTotalYield =
        perCropTotalYieldAndCultivation.get(currentCropName)?.totalYield!;
      let cropTotalCultivation =
        perCropTotalYieldAndCultivation.get(currentCropName)?.totalCultivation!;
      let numberOfYears =
        perCropTotalYieldAndCultivation.get(currentCropName)?.numberOfYears!;

      cropTotalYield += currentCropYield;
      cropTotalCultivation += currentCropCultivation;
      numberOfYears += 1;
    } else {
      // if no, then simply set the new value into the map for current crop.
      perCropTotalYieldAndCultivation.set(currentCropName, {
        totalYield: currentCropYield,
        totalCultivation: currentCropCultivation,
        numberOfYears: 1,
        avgYield: currentCropYield,
        avgCulitvation: currentCropCultivation,
      });
    }
  });

  for (const [key, value] of perCropTotalYieldAndCultivation) {
    perCropTotalYieldAndCultivation.set(key, {
      ...value,
      avgYield: +(value?.totalYield / value?.numberOfYears).toFixed(3),
      avgCulitvation: +(value?.avgCulitvation / value?.numberOfYears).toFixed(
        3
      ),
    });
  }

  return perCropTotalYieldAndCultivation;
};

export const getArrayOfObjectsFromMap = (mapData: any) => {
  const dataArray = [];
  for (const [key, value] of mapData) {
    dataArray?.push({
      ...{ key, ...value },
    });
  }
  return dataArray;
};
