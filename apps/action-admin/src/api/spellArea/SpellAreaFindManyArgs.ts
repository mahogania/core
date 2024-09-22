import { SpellAreaWhereInput } from "./SpellAreaWhereInput";
import { SpellAreaOrderByInput } from "./SpellAreaOrderByInput";

export type SpellAreaFindManyArgs = {
  where?: SpellAreaWhereInput;
  orderBy?: Array<SpellAreaOrderByInput>;
  skip?: number;
  take?: number;
};
