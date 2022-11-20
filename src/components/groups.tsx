/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, Key } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function groups(props: any) {
  const [value, setValue] = useState(() => [
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/400px-Flag_of_Senegal.svg.png",
      Name: "Senegal",
      id: 3,
      group: "A",
      position: "",
    },
    {
      source:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/400px-Flag_of_Ecuador.svg.png",
      Name: "Ecuador",
      id: 2,
      position: "",
    },
  ]);
  const [groupObj, setGroupObj] = useState<any[]>([]);
  const [countryFlag, setCountryFlag] = useState<
    {
      source: string;
      Name: string;
      id: number;
      group: string;
      position: string;
    }[]
  >([{ source: "", Name: "", id: 0, group: "", position: "" }]);
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
                position: "",
              },
            ]);
          }
        });
      });
    };
    getCountryDetail();
  }, [props.group]);

  useEffect(() => {
    const groupBy = (objectArray: any[], property: string) => {
      return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        const curGroup = acc[key] ?? [];
        return { ...acc, [key]: [...curGroup, obj] };
      }, {});
    };
    setGroupObj(groupBy(countryFlag, "group"));
  }, [countryFlag]);

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
  const handleValue = (event: any, newValue: any) => {
    //   let selected: {
    //     source: string;
    //     Name: string;
    //     id: number;
    //     group: string;
    //     position: string;
    //   } = countryFlag.find(
    //     (x: {
    //       source: string;
    //       Name: string;
    //       id: number;
    //       group: string;
    //       position: string;
    //     }) => (x.Name = newValue.Name)
    //   );
    // Object.keys(groupedPeople).map((item, i) => item.map.filter(
    //   (x) => x.Name === newValue.Name
    //  )[0].position = "A1";
    // countryFlag.find((x: any) => (x.Name = newValue.Name)).position = "A1";
    setCountryFlag((old) => [
      old.map((item) => {
        if (item.Name === newValue.Name) {
          return { ...item, position: "A50" };
        }
        return item;
      })[0],
    ]);
    console.log(countryFlag);

    // console.log(countryFlag.find((x: any) => (x.Name = newValue.Name)));}])
    // console.log(countryFlag.find((x: any) => (x.Name = newValue.Name)));
    // setValue((old) => [...old, newValue]);
  };
  return (
    <div>
      {Object.keys(groupObj)
        .sort()
        .map((item: string | any, i: number) => (
          <div className="mb-10">
            {/* {value.map((x: { Name: string }) => (
              <h1>{x.Name}</h1>
            ))} */}
            <p className="text-center mx-auto ">
              <span className="font-bold text-white  border border-solid border-white rounded-full w-16 px-3 py-2">
                {item}
              </span>
            </p>
            <ToggleButtonGroup
              value={value}
              exclusive
              onChange={handleValue}
              size="small"
              className=" border border-white border-solid w-full"
            >
              {groupObj[item as keyof object].map(
                (
                  media: { source: string; position: string },
                  ind: Key | null
                ) => (
                  <ToggleButton
                    size="large"
                    aria-label="list"
                    value={media}
                    key={media.source}
                  >
                    <h1>{media.position}</h1>
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
