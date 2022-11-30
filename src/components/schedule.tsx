/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function schedule(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leftValue, setLeftValue] = useState(() => ["", "", "", ""]);
  const [rightValue, setRightValue] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (props.leftHandleChange.length) {
      props.leftHandleChange(leftValue);
    }
  }, [leftValue]);
  useEffect(() => {
    if (props.leftHandleChange.length) {
      props.rightHandleChange(rightValue);
    }
  }, [rightValue]);

  const handleValue = (event: any, index: any, side: any) => {
    console.log(event.Name, index);
    if (side === "left") {
      setLeftValue((old) => [
        ...old.map((x, i) => {
          if (i === index) {
            return event;
          } else {
            return x;
          }
        }),
      ]);
    } else {
      setRightValue((old) => [
        ...old.map((x, i) => {
          if (i === index) {
            return event;
          } else {
            return x;
          }
        }),
      ]);
    }
  };

  return (
    <div className="w-[17%]">
      {props.type === "16" && (
        <p className="text-white text-base font-extrabold  text-center">
          Round Of 16
        </p>
      )}
      {props.type === "8" && (
        <p className="text-white text-base font-extrabold  text-center">
          Quater Finals
        </p>
      )}
      {props.type === "4" && (
        <p className="text-white text-base font-extrabold  text-center">
          Final
        </p>
      )}
      {props.leftSelected && (
        <div className="flex flex-col w-full mt-4">
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.leftSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                A1-B2
              </p>
            )}
            {props?.leftSelected &&
              props?.leftSelected
                .filter((x: any) => x.position === "A1" || x.position === "B2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={leftValue[0]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      color="primary"
                      onClick={() => {
                        handleValue(item, 0, "left");
                      }}
                      className="!bg-white !w-full !h-10 !p-0 !m-0 selected"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.leftSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                C1-D2
              </p>
            )}

            {props?.leftSelected &&
              props?.leftSelected
                .filter((x: any) => x.position === "C1" || x.position === "D2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={leftValue[1]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      onClick={() => {
                        handleValue(item, 1, "left");
                      }}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.leftSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                E1-F2
              </p>
            )}
            {props?.leftSelected &&
              props?.leftSelected
                .filter((x: any) => x.position === "E1" || x.position === "F2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={leftValue[2]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      onClick={() => {
                        handleValue(item, 2, "left");
                      }}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.leftSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                G1-H2
              </p>
            )}

            {props?.leftSelected &&
              props?.leftSelected
                .filter((x: any) => x.position === "G1" || x.position === "H2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={leftValue[3]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      onClick={() => {
                        handleValue(item, 3, "left");
                      }}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
        </div>
      )}
      {props.rightSelected && (
        <div className="flex flex-col w-full mt-4">
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.rightSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                B1-A2
              </p>
            )}

            {props?.rightSelected &&
              props?.rightSelected
                .filter((x: any) => x.position === "B1" || x.position === "A2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={rightValue[0]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      onClick={() => {
                        handleValue(item, 0, "right");
                      }}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.rightSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                D1-C2
              </p>
            )}

            {props?.rightSelected &&
              props?.rightSelected
                .filter((x: any) => x.position === "D1" || x.position === "C2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={rightValue[1]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      onClick={() => {
                        handleValue(item, 1, "right");
                      }}
                      aria-label="list"
                      value={item}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.rightSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                F1-E2
              </p>
            )}
            {props?.rightSelected &&
              props?.rightSelected
                .filter((x: any) => x.position === "F1" || x.position === "E2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={rightValue[2]}
                    exclusive
                    key={item.source}
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      aria-label="list"
                      value={item}
                      color="primary"
                      onClick={() => {
                        handleValue(item, 2, "right");
                      }}
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
                    >
                      {item.Name}
                    </ToggleButton>
                  </ToggleButtonGroup>
                ))}
          </div>
          <div className="bg-white p-2 mb-2 rounded-lg w-full mx-auto">
            {!props?.rightSelected.length && (
              <p className="text-gray-500 text-base font-extrabold  text-center">
                H1-G2
              </p>
            )}
            {props?.rightSelected &&
              props?.rightSelected
                .filter((x: any) => x.position === "H1" || x.position === "G2")
                .map((item: any, i: number) => (
                  <ToggleButtonGroup
                    value={rightValue[3]}
                    key={item.source}
                    exclusive
                    size="small"
                    orientation="vertical"
                    color="primary"
                    className=" border border-white border-solid !w-full !p-0 !m-0"
                  >
                    <ToggleButton
                      size="small"
                      onClick={() => {
                        handleValue(item, 3, "right");
                      }}
                      aria-label="list"
                      value={item}
                      color="primary"
                      className="!bg-white !w-full !h-10 !p-0 !m-0"
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
