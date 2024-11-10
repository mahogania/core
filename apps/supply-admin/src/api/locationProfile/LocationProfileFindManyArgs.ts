import { LocationProfileWhereInput } from "./LocationProfileWhereInput";
import { LocationProfileOrderByInput } from "./LocationProfileOrderByInput";

export type LocationProfileFindManyArgs = {
  where?: LocationProfileWhereInput;
  orderBy?: Array<LocationProfileOrderByInput>;
  skip?: number;
  take?: number;
};
