import { db } from "../../../data/data";
import { ChartDataTypes } from "../../DND/DND.types";
import { dataTypesObject } from "../../../data/data.types";

export const generateData = (chartData: ChartDataTypes) => {
  const data = db.map((data: dataTypesObject) => ({
    x: data[chartData.axis as keyof dataTypesObject],
    y: data[chartData.series as keyof dataTypesObject],
  }));

  return { data };
};
