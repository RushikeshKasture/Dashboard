import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";

const data2012 = [
  { week: 1, followers: 13000 },
  { week: 2, followers: 16500 },
  { week: 3, followers: 14250 },
];

const data2013 = [
  { week: 1, followers: 15000 },
  { week: 2, followers: 12500 },
  { week: 3, followers: 19500 },
];

const data2014 = [
  { week: 1, followers: 11500 },
  { week: 2, followers: 13250 },
  { week: 3, followers: 20000 },
];

const data2015 = [
  { week: 1, followers: 18000 },
  { week: 2, followers: 13250 },
  { week: 3, followers: 15000 },
];

function Followers() {
  return (
    <VictoryChart
      width={400}
      height={300}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      domainPadding={40}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        style={{
          grid: { stroke: "transparent" },
          axis: { stroke: "none" },
        }}
        tickValues={[1, 2, 3]}
        tickFormat={["Week 1", "Week 2", "Week 3"]}
      />

      <VictoryAxis
        style={{
          grid: { stroke: "transparent" },
        }}
        dependentAxis
        tickFormat={(x) => `${x / 1000}k`}
      />

      <VictoryStack colorScale={"cool"}>
        <VictoryBar data={data2012} x={"week"} y={"followers"} />
        <VictoryBar data={data2013} x={"week"} y={"followers"} />
        <VictoryBar data={data2014} x={"week"} y={"followers"} />
        <VictoryBar data={data2015} x={"week"} y={"followers"} />
      </VictoryStack>
    </VictoryChart>
  );
}

export default Followers;
