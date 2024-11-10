import { SpellWhereInput } from "./SpellWhereInput";
import { SpellOrderByInput } from "./SpellOrderByInput";

export type SpellFindManyArgs = {
  where?: SpellWhereInput;
  orderBy?: Array<SpellOrderByInput>;
  skip?: number;
  take?: number;
};
