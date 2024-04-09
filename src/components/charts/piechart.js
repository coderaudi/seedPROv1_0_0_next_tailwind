import React from "react";
import { PieChart } from "@lib";

const MYPieChart = () => {
  const data = [
    { value: 30, label: "Category A" },
    { value: 20, label: "Category B" },
    { value: 50, label: "Category C" },
    { value: 50, label: "Category D" },
    { value: 50, label: "Category E" },
  ];

  return (
    <div className="m-5">
      <PieChart
        width={500}
        height={300}
        series={[
          {
            data,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
      />
    </div>
  );
};

export default MYPieChart;
