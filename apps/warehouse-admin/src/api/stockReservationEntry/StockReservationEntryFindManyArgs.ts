import { StockReservationEntryWhereInput } from "./StockReservationEntryWhereInput";
import { StockReservationEntryOrderByInput } from "./StockReservationEntryOrderByInput";

export type StockReservationEntryFindManyArgs = {
  where?: StockReservationEntryWhereInput;
  orderBy?: Array<StockReservationEntryOrderByInput>;
  skip?: number;
  take?: number;
};
