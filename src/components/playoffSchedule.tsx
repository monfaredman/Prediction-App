import React from "react";
import Schedule from "./schedule";
export default function groups(props: any) {
  return (
    <div className="flex justify-around">
      <Schedule leftSelected={props.leftSelected} rightSelected={null} />
      <Schedule leftSelected={null} rightSelected={props.rightSelected} />
    </div>
  );
}
