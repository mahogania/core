import { CreatureSummonedDataWhereInput } from "./CreatureSummonedDataWhereInput";
import { CreatureSummonedDataOrderByInput } from "./CreatureSummonedDataOrderByInput";

export type CreatureSummonedDataFindManyArgs = {
  where?: CreatureSummonedDataWhereInput;
  orderBy?: Array<CreatureSummonedDataOrderByInput>;
  skip?: number;
  take?: number;
};
