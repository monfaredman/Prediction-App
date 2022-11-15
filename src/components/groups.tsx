/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, Key } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function groups(props: any) {
  const [view, setView] = useState("list");
  const getCountryDetail = async (name: any) => {
    const movies = await (await fetch(createUrl(name))).json();
    const x = movies.query.pages[0].thumbnail;
    return x;
  };
  const createUrl = (element: string) => {
    let url = "https://en.wikipedia.org/w/api.php?origin=*";
    const params: {
      [x: string]: string;
      action: string;
      prop: string;
      titles: string;
      format: string;
      formatversion: string;
    } = {
      action: "query",
      prop: "pageimages",
      titles: element,
      format: "json",
      piprop: "thumbnail&pithumbsize=400",
      formatversion: "2",
    };
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });
    return url;
  };
  return (
    <div>
      <ToggleButtonGroup orientation="vertical" value={view} exclusive>
        {props.group.map((item: any) => (
          <div key={item.group}>
            {item.teams.map(
              (team: { Name: {}; id: Key | null | undefined }) => (
                <ToggleButton
                  aria-label="list"
                  value={team.Name}
                  key={team.Name + team.id}
                >
                  <ViewListIcon />
                  <img
                    src={getCountryDetail(team.Name)}
                    alt={getCountryDetail(team.Name)}
                    key={getCountryDetail(team.Name)}
                    loading="lazy"
                    srcSet={getCountryDetail(team.Name)}
                    className="rounded-md object-fill !w-[4rem] !h-[4rem] border border-white border-solid"
                  />
                </ToggleButton>
              )
            )}
          </div>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
