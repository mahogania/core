import { Country as TCountry } from "../api/country/Country";

export const COUNTRY_TITLE_FIELD = "countryName";

export const CountryTitle = (record: TCountry): string => {
  return record.countryName?.toString() || String(record.id);
};
