/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

export default function groups(props: any) {
  useEffect(() => {
    console.log(props.group);
  }, []);

  return <div>sdfdsf</div>;
}
