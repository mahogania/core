import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";

export type CraftLevelStatCreateInput = {
  craft: CraftWhereUniqueInput;
  level?: number | null;
  stat: string;
  value?: string | null;
};
