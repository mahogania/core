import { EntityWhereUniqueInput } from "../entity/EntityWhereUniqueInput";

export type AssociationCreateInput = {
  ascendant?: EntityWhereUniqueInput | null;
  descendant?: EntityWhereUniqueInput | null;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
};
