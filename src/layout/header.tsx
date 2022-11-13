import React from "react";
import Countries from "../components/Countries";

export default function header() {
  return (
    <div className="header">
      <h1>FIFA WORLD CUP 2022 MATCH SCHEDULE</h1>
      <Countries />
    </div>
  );
}
