import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

async function getCharts() {
  const chartsData = await fetch("http://localhost:4000/charts");
  const data = await chartsData.text();
  return data;
}

function Charts() {
  const [letterDataState, setLetterDataState] = useState();

  useEffect(() => {
    const letterData = getCharts()
      .then((data) => data)
      .then((data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        setLetterDataState(parsedData);
      });
  }, []);

  return (
    <div className="letterChart" style={{ height: "400px", width: "100%" }}>
      <Line
        data={{
          labels: letterDataState && letterDataState.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data:
                letterDataState && letterDataState.map((data) => data.letters),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "#800080",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
        }}
      />
    </div>
  );
}

export default Charts;
