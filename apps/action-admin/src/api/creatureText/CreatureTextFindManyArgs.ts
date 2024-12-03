import { CreatureTextWhereInput } from "./CreatureTextWhereInput";
import { CreatureTextOrderByInput } from "./CreatureTextOrderByInput";

export type CreatureTextFindManyArgs = {
  where?: CreatureTextWhereInput;
  orderBy?: Array<CreatureTextOrderByInput>;
  skip?: number;
  take?: number;
};
