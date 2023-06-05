import React from "react";
import styled from "@emotion/styled";
import { NavigationBar } from "../components/NavigationBar";
import { useMediaQuery } from "react-responsive";

export const Domains = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div>
      <NavigationBar active={"my focus"} isMobile={isMobile} />
      <div
        style={{
          dislay: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Interested in this domain? </h2>
        <p style={{ textAlign: "center" }}>
          Please send me a message on Twitter or email me at{" "}
          <a href="mailto: josh@bickett.net">josh@bickett.net</a>
        </p>
      </div>
    </div>
  );
};
