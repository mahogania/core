import { CraftWhereUniqueInput } from "../craft/CraftWhereUniqueInput";

export type CraftLevelStatUpdateInput = {
  craft?: CraftWhereUniqueInput;
  level?: number | null;
  stat?: string;
  value?: string | null;
};
