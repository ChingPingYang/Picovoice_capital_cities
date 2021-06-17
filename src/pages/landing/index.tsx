import React from "react";
import LandingPage from "./LandingPage";
import { getCountryAndNeighbors } from "../../utils/service";
import { CountryData } from "../../utils/type";

function Index() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isFocused = React.useRef(true);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Array<CountryData>>([]);
  const [error, setError] = React.useState<null | string>(null);

  React.useEffect(() => {
    return () => {
      isFocused.current = false;
    };
  }, []);

  const handleOnValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleOnSearch = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const result = await getCountryAndNeighbors(
        `name/${value}?fields=name;capital;borders;flag`
      );
      if (isFocused.current) {
        setData(result);
      }
    } catch (err) {
      setData([]);
      setError("Nothing is found...");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <React.Fragment>
      <LandingPage
        ref={inputRef}
        value={value}
        handleOnValueChange={handleOnValueChange}
        handleOnSearch={handleOnSearch}
        data={data}
        loading={loading}
        error={error}
      />
    </React.Fragment>
  );
}

export default Index;
