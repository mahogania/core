import { AssociationCreateNestedManyWithoutEntitiesInput } from "./AssociationCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type EntityCreateInput = {
  description?: string | null;
  displayName?: string | null;
  incomingAssociations?: AssociationCreateNestedManyWithoutEntitiesInput;
  name?: string | null;
  outgoingAssociations?: AssociationCreateNestedManyWithoutEntitiesInput;
  owner?: UserWhereUniqueInput | null;
  template?: TemplateWhereUniqueInput | null;
  version?: string | null;
};
