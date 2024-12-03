import { MaterialRequestItemWhereInput } from "./MaterialRequestItemWhereInput";
import { MaterialRequestItemOrderByInput } from "./MaterialRequestItemOrderByInput";

export type MaterialRequestItemFindManyArgs = {
  where?: MaterialRequestItemWhereInput;
  orderBy?: Array<MaterialRequestItemOrderByInput>;
  skip?: number;
  take?: number;
};
