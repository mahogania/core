import { CreatureLootWhereInput } from "./CreatureLootWhereInput";
import { CreatureLootOrderByInput } from "./CreatureLootOrderByInput";

export type CreatureLootFindManyArgs = {
  where?: CreatureLootWhereInput;
  orderBy?: Array<CreatureLootOrderByInput>;
  skip?: number;
  take?: number;
};
