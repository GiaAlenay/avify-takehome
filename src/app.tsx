import React, { useEffect, useState } from "react";
import { getLast30MinUKGenerationData } from "./api";
import { Card, CardContent, Typography } from "@mui/material";

import { Generation } from "./interfaces";
import Charts from "./charts";
import Loader from "./loader";
import Error from "./Error";

const App = () => {
  const [generationDataList, setGenerationDataList] = useState<Generation[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [chartOption, setChartOption] = useState<string>("Bars");
  const [rangeDateStart, setRangeDateStart] = useState<string>(null);
  const [rangeDateEnd, setRangeDateEnd] = useState<string>(null);

  useEffect(() => {
    const fetchGeneration = async () => {
      try {
        const res = await getLast30MinUKGenerationData();
        setGenerationDataList(
          res.data.generationmix.sort((a, b) => b.perc - a.perc)
        );
        setRangeDateEnd(res.data.to);
        setRangeDateStart(res.data.from);
      } catch (err: any) {
        if (err.message) {
          setError(err.message);
        } else {
          setError("Failed to fetch energy data");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchGeneration();
  }, []);

  let content;

  if (loading) content = <Loader />;
  else if (error) content = <Error errorMSG={error} />;
  else
    content = (
      <Charts
        generationDataList={generationDataList}
        chartOption={chartOption}
        setChartOption={setChartOption}
        rangeDateStart={rangeDateStart}
        rangeDateEnd={rangeDateEnd}
      />
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "8px",
      }}
    >
      <Typography variant="h1" gutterBottom>
        UK Energy Mix
      </Typography>
      <Card sx={{ minWidth: 280, width: "100%" }}>
        <CardContent>
          <div style={{ minHeight: "300px" }}> {content}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export { App };
