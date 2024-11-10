import { ItemAttributeValueWhereInput } from "./ItemAttributeValueWhereInput";
import { ItemAttributeValueOrderByInput } from "./ItemAttributeValueOrderByInput";

export type ItemAttributeValueFindManyArgs = {
  where?: ItemAttributeValueWhereInput;
  orderBy?: Array<ItemAttributeValueOrderByInput>;
  skip?: number;
  take?: number;
};
