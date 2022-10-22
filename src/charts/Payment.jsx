import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    credit: 3000,
    debit: 4400,
    amt: 2400,
  },
  {
    name: "Feb",
    credit: 3000,
    debit: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    credit: 2000,
    debit: 5500,
    amt: 2290,
  },
  {
    name: "April",
    credit: 4000,
    debit: 3800,
    amt: 5290,
  },
];

function Payment() {
  return (
    <AreaChart
      width={400}
      height={250}
      data={data}
      margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <Tooltip />
      <Area
        type="monotone"
        dataKey="credit"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="debit"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}

export default Payment;
