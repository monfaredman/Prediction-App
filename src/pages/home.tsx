import { useState, useEffect } from "react";
import groupsData from "assets/data/groups.json";
import Groups from "components/groups";
import Playoff from "components/playoffSchedule";
import "../style/style.scss";

export default function Home() {
  // useEffect(() => {
  //   console.log(groupsData.allGroups);
  // }, []);
  return (
    <div>
      <div className="w-full flex justify-between  mx-auto mt-6 mb-10">
        <div className="groups">
          <Groups group={groupsData.allGroups} type="left" />
        </div>
        <div className="playoff">
          <Playoff />
        </div>
        <div className="groups">
          <Groups group={groupsData.allGroups} type="right" />
        </div>
      </div>
    </div>
  );
}
