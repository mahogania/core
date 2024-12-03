import { SerialNoWhereInput } from "./SerialNoWhereInput";
import { SerialNoOrderByInput } from "./SerialNoOrderByInput";

export type SerialNoFindManyArgs = {
  where?: SerialNoWhereInput;
  orderBy?: Array<SerialNoOrderByInput>;
  skip?: number;
  take?: number;
};
