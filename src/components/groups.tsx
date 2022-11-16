/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, Key } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function groups(props: any) {
  const [view, setView] = useState("list");

  const [countryFlag, setCountryFlag] = useState<
    { source: string; Name: string; id: number; group: string }[]
  >([{ source: "", Name: "", id: 0, group: "" }]);
  useEffect(() => {
    const getCountryDetail = async () => {
      setCountryFlag([]);
      props.group.forEach(async (x: any) => {
        x.teams.forEach(async (element: any) => {
          const movies = await (await fetch(createUrl(element.Name))).json();
          if (movies.query.pages[0].thumbnail) {
            setCountryFlag((old) => [
              ...old,
              {
                source: movies.query.pages[0].thumbnail.source,
                Name: element.Name,
                id: element.id,
                group: x.group,
              },
            ]);
          }
        });
      });
    };
    getCountryDetail();
  }, []);
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
  function groupBy(objectArray: any[], property: string) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];

      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }
  const groupedPeople = groupBy(countryFlag, "group");
  console.log(groupedPeople);

  return (
    <div>
      {Object.keys(groupedPeople)
        .sort()
        .map((item, i) => (
          <div>
            <p className={props.type === "right" ? "ml-auto" : "mr-auto"}>
              {item}
            </p>
            <ToggleButtonGroup
              value={view}
              exclusive
              size="small"
              className=" border border-white border-solid w-full"
            >
              {groupedPeople[item].map(
                (
                  media: { source: string | undefined },
                  ind: Key | null | undefined
                ) => (
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={view}
                    key={media.source}
                  >
                    <img
                      key={media.source}
                      src={media.source}
                      loading="lazy"
                      className="rounded-md w-12 h-16 object-cover border border-white border-solid"
                    />
                  </ToggleButton>
                )
              )}
            </ToggleButtonGroup>
          </div>
        ))}
    </div>
  );
}
