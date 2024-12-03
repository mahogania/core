import { BinWhereInput } from "./BinWhereInput";

export type BinListRelationFilter = {
  every?: BinWhereInput;
  some?: BinWhereInput;
  none?: BinWhereInput;
};
