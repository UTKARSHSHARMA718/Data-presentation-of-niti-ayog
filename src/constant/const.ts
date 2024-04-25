import { GiFarmer } from "react-icons/gi";
import { GiFarmTractor } from "react-icons/gi";
import { GiSugarCane } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";

export const cropMinMaxtableHeaders = [
  "Year",
  "Crop with Maximum Production in that Year",
  "Crop with Minimum Production in that Year",
];

export const cropMinMaxDataKeys = ["minCropName", "maxCropName", "key"];

export const cropAvgYieldAndCultivationTableHeaders = [
  "Crop",
  "Average Yield of the Crop between 1950-2020",
  "Average Cultivation Area of the Crop between 1950-2020",
];

export const cropAvgYieldAndCultivationDataKeys = [
  "key",
  "avgYield",
  "avgCulitvation",
];

export const ABOUT_SECTION_POINTS = [
  {
    text: "This web app helps user to find the data about the different crop from year 1950 to 2020",
    icon: GiFarmer,
  },
  {
    text: "User can see the data of maximum and minimum crop production per year",
    icon: GiFarmTractor,
  },
  {
    text: "User can see the data of average yeild and cultivation per crop",
    icon: GiSugarCane,
  },
  {
    text: "The data provided can be significanlty helpful to the user for pre-planning the crop production for current and future year.",
    icon: GiWheat,
  },
];
