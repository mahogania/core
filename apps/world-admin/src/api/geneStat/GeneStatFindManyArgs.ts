import { GeneStatWhereInput } from "./GeneStatWhereInput";
import { GeneStatOrderByInput } from "./GeneStatOrderByInput";

export type GeneStatFindManyArgs = {
  where?: GeneStatWhereInput;
  orderBy?: Array<GeneStatOrderByInput>;
  skip?: number;
  take?: number;
};
