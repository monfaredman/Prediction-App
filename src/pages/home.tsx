import { useState, useEffect } from "react";
import groupsData from "assets/data/groups.json";
import Groups from "components/groups";
import Playoff from "components/playoffSchedule";
import "../style/style.css";

export default function Home() {
  const [leftItemSelected, setLeftItemSelected] = useState<any[]>([]);
  const [leftItemSelected2, setLeftItemSelected2] = useState<any[]>([]);
  const [finalLeftItemSelected, setFinalLeftItemSelected] = useState<any[]>([]);
  const [rightItemSelected, setRightItemSelected] = useState<any[]>([]);
  const [rightItemSelected2, setRightItemSelected2] = useState<any[]>([]);
  const [finalRightItemSelected, setFinalRightItemSelected] = useState<any[]>(
    []
  );
  const leftParentHandleChange = (e: any) => {
    e.map((x: any) => {
      if (
        x?.position === "A1" ||
        x?.position === "B2" ||
        x?.position === "C1" ||
        x?.position === "D2" ||
        x?.position === "E1" ||
        x?.position === "F2" ||
        x?.position === "G1" ||
        x?.position === "H2"
      ) {
        setLeftItemSelected((old) => [...e]);
      } else {
        setLeftItemSelected2((old) => [...e]);
      }
    });
  };
  const rightParentHandleChange = (e: any) => {
    e.map((x: any) => {
      if (
        x?.position === "A2" ||
        x?.position === "B1" ||
        x?.position === "C2" ||
        x?.position === "D1" ||
        x?.position === "E2" ||
        x?.position === "F1" ||
        x?.position === "G2" ||
        x?.position === "H1"
      ) {
        setRightItemSelected((old) => [...e]);
      } else {
        setRightItemSelected2((old) => [...e]);
      }
    });
  };
  useEffect(() => {
    setFinalLeftItemSelected([...leftItemSelected, ...rightItemSelected2]);
    setFinalRightItemSelected([...rightItemSelected, ...leftItemSelected2]);
  }, [leftItemSelected2, rightItemSelected2]);

  return (
    <div>
      <div className="w-full flex justify-between  mx-auto mt-6 mb-10">
        <div className="groups-side">
          <Groups
            leftHandleChange={leftParentHandleChange}
            group={groupsData.allGroups.slice(0, 4)}
            type="left"
          />
        </div>
        <div className="playoff">
          <Playoff
            leftSelected={finalLeftItemSelected}
            rightSelected={finalRightItemSelected}
          />
        </div>
        <div className="groups-side ">
          <Groups
            rightHandleChange={rightParentHandleChange}
            group={groupsData.allGroups.slice(4, 8)}
            type="right"
          />
        </div>
      </div>
    </div>
  );
}
