/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, Key } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";

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
  const [groupSelected, setGroupSelected] = useState<any[]>([]);
  const [index, setIndex] = useState<any[]>([1, 1, 1, 1, 1, 1, 1, 1]);
  const [selected, setSelected] = useState(false);
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
    if (props.type === "left") {
      props.leftHandleChange(groupSelected);
    } else {
      props.rightHandleChange(groupSelected);
    }
  }, [groupSelected]);

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
  }, []);

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
  const handleValue = (event: any, newValue: any, idx: number) => {
    const yourNextList = [...countryFlag];
    let artwork = yourNextList?.find((a) => a.Name === newValue.Name);
    if (index[idx] < 3 && !newValue.position) {
      if (artwork) {
        artwork.position = `${newValue.group}${index[idx]}`;
        const oldOne = [
          ...index.map((item: number, i: number) => {
            if (i === idx) {
              return item + 1;
            } else {
              return item;
            }
          }),
        ];
        setIndex(oldOne);
        setGroupSelected((old) => [...old, artwork]);
      }
    } else if (newValue.position) {
      if (artwork) {
        const oldOne = [
          ...index.map((item: number, i: number) => {
            if (i === idx) {
              return 1;
            } else {
              return item;
            }
          }),
        ];
        setIndex(oldOne);
        artwork.position = "";
      }
      setGroupSelected((old) => [
        ...old.filter((item) => item.group !== artwork?.group),
      ]);
      yourNextList.filter((item) => {
        if (item.group === artwork?.group) {
          item.position = "";
          return item;
        } else {
          return item;
        }
      });
    }
    setCountryFlag(yourNextList);
  };
  return (
    <div
      className={
        props.type === "left"
          ? "ml-0 mr-auto flex justify-between flex-wrap"
          : "flex justify-between flex-wrap mr-0 ml-auto"
      }
    >
      {Object.keys(groupObj)
        .sort()
        .map((item: string | any, i: number) => (
          <div className="mb-10 ">
            <p className="text-center mx-auto ">
              <span className="font-bold text-white bg-green-500  border border-solid border-white rounded-full w-16 px-3 py-2">
                {item}
              </span>
            </p>
            <ToggleButtonGroup
              value={value}
              exclusive
              size="small"
              orientation="vertical"
              color="primary"
              className=" border border-white border-solid w-full"
            >
              {groupObj[item as keyof object].map(
                (
                  media: { source: string; position: string },
                  ind: Key | null
                ) => (
                  <ToggleButton
                    onClick={() => {
                      handleValue(event, media, i);
                    }}
                    size="large"
                    aria-label="list"
                    value={media}
                    key={media.source}
                    selected={selected}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                    color="primary"
                    className="!bg-white"
                  >
                    <img
                      key={media.source}
                      src={media.source}
                      loading="lazy"
                      className={
                        media.position === `${item}2`
                          ? "border-2 border-blue-500 border-solid rounded-full "
                          : media.position === `${item}1`
                          ? "border-2 border-yellow-400 border-solid  rounded-full "
                          : " rounded-full   "
                      }
                    />
                    {+media.position[1] === 1 ? (
                      <LooksOneIcon color="secondary" fontSize="small" />
                    ) : +media.position[1] === 2 ? (
                      <LooksTwoIcon color="primary" fontSize="small" />
                    ) : (
                      ""
                    )}
                  </ToggleButton>
                )
              )}
            </ToggleButtonGroup>
          </div>
        ))}
    </div>
  );
}
