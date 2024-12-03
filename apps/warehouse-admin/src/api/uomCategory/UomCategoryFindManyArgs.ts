import { UomCategoryWhereInput } from "./UomCategoryWhereInput";
import { UomCategoryOrderByInput } from "./UomCategoryOrderByInput";

export type UomCategoryFindManyArgs = {
  where?: UomCategoryWhereInput;
  orderBy?: Array<UomCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
