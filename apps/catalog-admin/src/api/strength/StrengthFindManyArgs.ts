import { StrengthWhereInput } from "./StrengthWhereInput";
import { StrengthOrderByInput } from "./StrengthOrderByInput";

export type StrengthFindManyArgs = {
  where?: StrengthWhereInput;
  orderBy?: Array<StrengthOrderByInput>;
  skip?: number;
  take?: number;
};
