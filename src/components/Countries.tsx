import { useState, useEffect } from "react";
import CountriesData from "assets/data/countries.json";

export default function Countries() {
  type Employee = {
    [x: string]: any;
    source: string;
    height: number;
    width: number;
  };
  const [countryFlag, setCountryFlag] = useState<Employee[]>([]);
  useEffect(() => {
    getCountryDetail();
  }, []);
  const getCountryDetail = async () => {
    let foundObj: any = [];
    CountriesData.countries.forEach(async (element) => {
      const response = await fetch(createUrl(element.Name));
      const movies = await response.json();
      function findNestedObj(entireObj: Object, keyToFind: any) {
        JSON.stringify(entireObj, (_, nestedValue) => {
          if (nestedValue && nestedValue[keyToFind]) {
            foundObj.push(nestedValue);
          }
        });
      }
      findNestedObj(movies.query.pages[0].thumbnail, "source");
    });
    setCountryFlag((old) => [...old, foundObj]);
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
      piprop: "thumbnail&pithumbsize=500",
      formatversion: "2",
    };
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });
    return url;
  };
  const mapImage = countryFlag.map((x) => {
    console.log(x);
    return x.map((item: { source: string }) => {
      if (item) {
        return <img src={item.source} alt={item.source} key={item.source} />;
      } else {
        return <p className="text-white">sdsd</p>;
      }
    });
  });

  return <div>{mapImage} && null</div>;
}
