import { useState, useEffect } from "react";
import groupsData from "assets/data/groups.json";
import Groups from "components/groups";
import Playoff from "components/playoffSchedule";

export default function Home() {
  // useEffect(() => {
  //   console.log(groupsData.allGroups);
  // }, []);
  return (
    <div>
      <div className="flex justify-between w-full mx-auto mt-6 mb-10">
        <Groups group={groupsData.allGroups} />
        <Playoff />
        <Groups group={groupsData.allGroups} />
      </div>
    </div>
  );
}
