import { ItemAlternativeWhereInput } from "./ItemAlternativeWhereInput";
import { ItemAlternativeOrderByInput } from "./ItemAlternativeOrderByInput";

export type ItemAlternativeFindManyArgs = {
  where?: ItemAlternativeWhereInput;
  orderBy?: Array<ItemAlternativeOrderByInput>;
  skip?: number;
  take?: number;
};
