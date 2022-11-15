/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, Key } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function groups(props: any) {
  const [view, setView] = useState("list");
  type Employee = {
    [x: string]: any;
    source: string;
    id: number;
    Name: string;
  };
  const [countryFlag, setCountryFlag] = useState<Employee[]>([]);
  useEffect(() => {
    const getCountryDetail = async () => {
      setCountryFlag([]);
      props.group.forEach(async (x: any) => {
        x.teams.map(async (element: any) => {
          const movies = await (await fetch(createUrl(element.Name))).json();
          if (movies.query.pages[0].thumbnail) {
            setCountryFlag((old: any) => [
              ...old,
              {
                src: movies.query.pages[0].thumbnail.source,
                Name: element.Name,
                id: element.id,
              },
            ]);
          }
        });
      });
    };
    getCountryDetail();
  }, [props]);
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
                <ToggleButton aria-label="list" value={team.Name} key={team.id}>
                  <ViewListIcon />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/400px-Flag_of_South_Korea.svg.png"
                    alt="abc"
                    loading="lazy"
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
