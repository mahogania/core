import { CreatureImmunitiesWhereInput } from "./CreatureImmunitiesWhereInput";
import { CreatureImmunitiesOrderByInput } from "./CreatureImmunitiesOrderByInput";

export type CreatureImmunitiesFindManyArgs = {
  where?: CreatureImmunitiesWhereInput;
  orderBy?: Array<CreatureImmunitiesOrderByInput>;
  skip?: number;
  take?: number;
};
