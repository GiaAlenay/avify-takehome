import React from "react";
import { MyChartProps } from "./interfaces";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from "recharts";
import { mychartColors } from "./shared";
import { LuClock3 } from "react-icons/lu";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

const Charts: React.FC<MyChartProps> = ({
  generationDataList,
  chartOption,
  setChartOption,
  rangeDateStart,
  rangeDateEnd,
}) => {
  let content;

  function handleHour(dateStr: string) {
    console.log(dateStr);
    const dateObj = new Date(dateStr);
    console.log(dateObj);
    return dateObj.toISOString().slice(11, 16);
  }

  switch (chartOption) {
    case "Pie":
      content = (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={generationDataList}
              dataKey="perc"
              nameKey="fuel"
              outerRadius={100}
              label
            >
              {generationDataList.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={mychartColors[index % mychartColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
      break;

    default:
      content = (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={generationDataList}>
            <XAxis dataKey="fuel" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="perc">
              {generationDataList.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={mychartColors[index % mychartColors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            verticalAlign: "middle",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Todays UK energy generation data
          </Typography>
          <Select
            value={chartOption}
            onChange={(e: SelectChangeEvent) => setChartOption(e.target.value)}
            displayEmpty
            sx={{ minWidth: "200px" }}
          >
            {["Bars", "Pie"].map((ele: string, i: number) => (
              <MenuItem key={i} value={ele}>
                {ele}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              verticalAlign: "middle",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LuClock3 size={12} color="rgb(128,128,128)" />
            <span> From: {handleHour(rangeDateStart)}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              verticalAlign: "middle",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LuClock3 size={12} color="rgb(128,128,128)" />
            <span> To: {handleHour(rangeDateEnd)}</span>
          </div>
        </div>
      </div>

      {content}
    </div>
  );
};

export default Charts;
