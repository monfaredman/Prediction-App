import Schedule from "./schedule";
import { useState } from "react";
export default function groups(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leftValue, setLeftValue] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rightValue, setRightValue] = useState(() => ["", "", "", ""]);

  const leftParentHandleChange = (e: any) => {
    setLeftValue(e);
  };
  const rightParentHandleChange = (e: any) => {
    setRightValue(e);
  };
  return (
    <div className="flex justify-between px-10">
      <Schedule
        type={"16"}
        leftSelected={props.leftSelected}
        rightSelected={null}
        leftHandleChange={leftParentHandleChange}
        rightHandleChange={leftParentHandleChange}
      />
      <Schedule
        type={"8"}
        leftSelected={leftValue}
        rightSelected={null}
        leftHandleChange={leftParentHandleChange}
        rightHandleChange={leftParentHandleChange}
      />
      <Schedule
        type={"4"}
        leftSelected={props.leftSelected}
        rightSelected={null}
        leftHandleChange={leftParentHandleChange}
        rightHandleChange={leftParentHandleChange}
      />
      <Schedule
        type={"8"}
        leftSelected={rightValue}
        rightSelected={null}
        rightHandleChange={rightParentHandleChange}
        leftHandleChange={rightParentHandleChange}
      />
      <Schedule
        type={"16"}
        leftSelected={null}
        rightSelected={props.rightSelected}
        rightHandleChange={rightParentHandleChange}
        leftHandleChange={rightParentHandleChange}
      />
    </div>
  );
}
