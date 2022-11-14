import { useState, useEffect } from "react";
import CountriesData from "assets/data/countries.json";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Countries(props: any) {
  type Employee = {
    [x: string]: any;
    source: string;
    height: number;
    width: number;
  };
  const [countryFlag, setCountryFlag] = useState<Employee[]>([]);
  useEffect(() => {
    const getCountryDetail = async () => {
      setCountryFlag([]);
      const startCountry = props.type === "header" ? 0 : 16;
      const endCountry = props.type === "header" ? 16 : 32;
      CountriesData.countries
        .slice(startCountry, endCountry)
        .forEach(async (element) => {
          const movies = await (await fetch(createUrl(element.Name))).json();
          if (movies.query.pages[0].thumbnail) {
            setCountryFlag((old: any) => [
              ...old,
              movies.query.pages[0].thumbnail,
            ]);
          }
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
  return (
    <ImageList
      sx={{ width: 2 / 2, height: 80 }}
      variant="standard"
      cols={16}
      rowHeight={60}
    >
      {countryFlag.map((item: { source: string }) => (
        <ImageListItem
          sx={{ width: 63, height: 100 }}
          className="w-[40rem] h-[40rem] object-fit"
          cols={1}
          key={item.source}
        >
          <img
            src={item.source}
            alt={item.source}
            key={item.source}
            loading="lazy"
            srcSet={item.source}
            className="rounded-md object-fill !w-[4rem] !h-[4rem]"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
