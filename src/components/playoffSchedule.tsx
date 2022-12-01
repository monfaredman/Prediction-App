import Schedule from "./schedule";
import { useState } from "react";
export default function groups(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leftValue, setLeftValue] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rightValue, setRightValue] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [leftValue2, setLeftValue2] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rightValue2, setRightValue2] = useState(() => ["", "", "", ""]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [finalValue, setFinalValue] = useState(() => ["", ""]);

  const leftParentHandleChange = (e: any) => {
    setLeftValue(e);
  };
  const rightParentHandleChange = (e: any) => {
    setRightValue(e);
  };
  const leftParentHandleChange2 = (e: any) => {
    setLeftValue2(e);
  };
  const rightParentHandleChange2 = (e: any) => {
    setRightValue2(e);
  };
  const finalParentHandleChange1 = (e: any) => {
    setFinalValue((old) => [(old[0] = e), ...old]);
  };
  const finalParentHandleChange2 = (e: any) => {
    setFinalValue((old) => [(old[1] = e), ...old]);
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
        leftHandleChange={leftParentHandleChange2}
        rightHandleChange={leftParentHandleChange2}
      />
      <Schedule
        type={"4"}
        leftSelected={leftValue2}
        rightSelected={null}
        leftHandleChange={finalParentHandleChange1}
        rightHandleChange={finalParentHandleChange1}
      />
      <Schedule
        type={"2"}
        finalSelected={finalValue}
        leftHandleChange={leftParentHandleChange}
        rightHandleChange={leftParentHandleChange}
      />
      <Schedule
        type={"4"}
        rightSelected={rightValue2}
        leftSelected={null}
        rightHandleChange={finalParentHandleChange2}
        leftHandleChange={finalParentHandleChange2}
      />
      <Schedule
        type={"8"}
        rightSelected={rightValue}
        leftSelected={null}
        rightHandleChange={rightParentHandleChange2}
        leftHandleChange={rightParentHandleChange2}
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
