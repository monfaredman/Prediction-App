import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function schedule(props: any) {
  return (
    <div className="flex justify-between">
      {props.leftSelected && (
        <div className="flex flex-col justify-around  ">
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.leftSelected
              .filter((x: any) => x.position === "A1" || x.position === "B2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                    {item.position}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.leftSelected
              .filter((x: any) => x.position === "C1" || x.position === "D2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.leftSelected
              .filter((x: any) => x.position === "E1" || x.position === "F2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.leftSelected
              .filter((x: any) => x.position === "G1" || x.position === "H2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
        </div>
      )}
      {props.rightSelected && (
        <div className="flex flex-col justify-around  ">
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.rightSelected
              .filter((x: any) => x.position === "B1" || x.position === "A2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                    {item.position}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.rightSelected
              .filter((x: any) => x.position === "D1" || x.position === "C2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.rightSelected
              .filter((x: any) => x.position === "F1" || x.position === "E2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg">
            {props?.rightSelected
              .filter((x: any) => x.position === "H1" || x.position === "G2")
              .map((item: any, i: number) => (
                <ToggleButtonGroup
                  value={item}
                  exclusive
                  size="small"
                  orientation="vertical"
                  color="primary"
                  className=" border border-white border-solid w-full"
                >
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={item}
                    key={i}
                    color="primary"
                    className="!bg-white"
                  >
                    {item.Name}
                  </ToggleButton>
                </ToggleButtonGroup>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
