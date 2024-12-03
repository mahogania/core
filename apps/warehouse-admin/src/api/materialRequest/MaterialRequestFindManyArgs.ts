import { MaterialRequestWhereInput } from "./MaterialRequestWhereInput";
import { MaterialRequestOrderByInput } from "./MaterialRequestOrderByInput";

export type MaterialRequestFindManyArgs = {
  where?: MaterialRequestWhereInput;
  orderBy?: Array<MaterialRequestOrderByInput>;
  skip?: number;
  take?: number;
};
