import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { year: "2018", B2B: 28, B2C: 8, stock: 17 },
  { year: "2019", B2B: 18, B2C: 11, stock: 14 },
  { year: "2020", B2B: 20, B2C: 19, stock: 24 },
  { year: "2021", B2B: 11, B2C: 15, stock: 13 },
];
function TotalSales() {
  return (
    <LineChart
      width={400}
      height={250}
      data={data}
      margin={{ top: 25, right: 30, left: -10, bottom: 10 }}
    >
      <Line type="monotone" dataKey="B2B" stroke="#2196F3" strokeWidth={2} />
      <Line type="monoto4ne" dataKey="B2C" stroke="#F44236" strokeWidth={2} />
      <Line type="monotone" dataKey="stock" stroke="#FFCA29" strokeWidth={2} />
      <CartesianGrid stroke="none" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export default TotalSales;
