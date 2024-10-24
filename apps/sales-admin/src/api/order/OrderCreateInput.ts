import { DealWhereUniqueInput } from "../deal/DealWhereUniqueInput";

export type OrderCreateInput = {
  deal?: DealWhereUniqueInput | null;
};
