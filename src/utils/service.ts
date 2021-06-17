import axios from "axios";
import { CountryData, Border } from "./type";
const source = axios.CancelToken.source();

/**
 *@param endPoint end point uri
 *@param options axios GET options
 */
export const getData = async (endPoint: string, options?: {}) => {
  try {
    const response = await axios.get(endPoint, {
      ...options,
      cancelToken: source.token,
    });
    return response.data;
  } catch (err) {
    console.log("Failed:", err.response.data.message);
    return err.response.data.message;
  }
};

/**
 *@param countries countryData
 */
export const getNeighborsData = async (countries: Array<CountryData>) => {
  try {
    const data = await Promise.all(
      countries.map(async (country: CountryData) => {
        try {
          const neighbors = await Promise.all(
            country.borders.map((border: Border) =>
              getData(`/alpha/${border}?fields=name;capital;flag`)
            )
          );
          const newData = { ...country, neighbors };
          return newData;
        } catch (err) {
          console.log(err);
        }
      })
    );
    return data;
  } catch (err) {
    console.log("Failed:", err.response.data.message);
    return err.response.data.message;
  }
};

/**
 *@param endPoint end point uri
 *@param options axios GET options
 */
export const getCountryAndNeighbors = async (endPoint: string) => {
  try {
    const countryData = await getData(endPoint);
    const countryWithNeighbors = await getNeighborsData(countryData);
    return countryWithNeighbors;
  } catch (err) {
    console.log("Failed:", err.response.data.message);
    return err.response.data.message;
  }
};
