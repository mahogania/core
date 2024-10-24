import { WorldWhereInput } from "./WorldWhereInput";

export type WorldListRelationFilter = {
  every?: WorldWhereInput;
  some?: WorldWhereInput;
  none?: WorldWhereInput;
};
