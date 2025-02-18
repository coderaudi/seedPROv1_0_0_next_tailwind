'use client';
import React, { useState, useEffect } from 'react';
import { PieChart } from '@lib';

const MYPieChart = ({ pieChartData }) => {
  const [chartData, setChartData] = useState(pieChartData);

  // Step 2: Update the chartData whenever pieChartData prop changes
  useEffect(() => {
    console.log("chartData------->", pieChartData);
    setChartData(pieChartData); // Set new data when pieChartData changes
  }, [pieChartData]); // Re-run this effect when pieChartData changes

  return (
    <div className="m-5">
      <PieChart
        width={500}
        height={300}
        series={[
          {
            data: chartData,
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
