import { EpicWhereInput } from "./EpicWhereInput";
import { EpicOrderByInput } from "./EpicOrderByInput";

export type EpicFindManyArgs = {
  where?: EpicWhereInput;
  orderBy?: Array<EpicOrderByInput>;
  skip?: number;
  take?: number;
};
