/**@jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Container, Text } from "@theme-ui/components";
import { lighten, darken } from "@theme-ui/color";

import ThemeProvider from "../../components/ThemeProvider";
import WeatherEngine from "../../components/WeatherEngine/component";

const WeatherBlock = () => {
  return (
    <ThemeProvider>
      <Container p={1} sx={{ bg: lighten("background", 0.07), height: "100%" }}>
        <Text
          variant="text.h2"
          sx={{ textAlign: "center", color: darken("text", 0.07) }}
        >
          Weather
        </Text>
        <Container sx={{ display: "flex", alignItems: "space-around" }}>
          <WeatherEngine location="Sydney, au" />
          <WeatherEngine location="london, gb" />
          <WeatherEngine location="perth, au" />
          <WeatherEngine location="vancouver, CA" />
          <WeatherEngine location="new york, USA" />
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default WeatherBlock;
