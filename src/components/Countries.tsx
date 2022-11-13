import { Person } from "@mui/icons-material";
import React from "react";

export default function Countries() {
  return <div>Countries</div>;
}

function getCountryDetail() {
  let url = "https://en.wikipedia.org/w/api.php";
  const params: {
    action: string;
    prop: string;
    titles: string;
    format: string;
  } = {
    action: "query",
    prop: "images",
    titles: "Albert Einstein",
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });
  console.log(url);
}
getCountryDetail();
