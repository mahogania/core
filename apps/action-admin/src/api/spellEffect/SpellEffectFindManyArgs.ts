import { SpellEffectWhereInput } from "./SpellEffectWhereInput";
import { SpellEffectOrderByInput } from "./SpellEffectOrderByInput";

export type SpellEffectFindManyArgs = {
  where?: SpellEffectWhereInput;
  orderBy?: Array<SpellEffectOrderByInput>;
  skip?: number;
  take?: number;
};
