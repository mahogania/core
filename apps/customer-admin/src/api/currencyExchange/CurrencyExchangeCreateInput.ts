export type CurrencyExchangeCreateInput = {
  creation?: Date | null;
  date?: Date | null;
  docstatus?: number | null;
  exchangeRate?: number | null;
  forBuying?: boolean | null;
  forSelling?: boolean | null;
  fromCurrency?: string | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  toCurrency?: string | null;
};