import { AssociationUpdateManyWithoutEntitiesInput } from "./AssociationUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type EntityUpdateInput = {
  description?: string | null;
  displayName?: string | null;
  incomingAssociations?: AssociationUpdateManyWithoutEntitiesInput;
  name?: string | null;
  outgoingAssociations?: AssociationUpdateManyWithoutEntitiesInput;
  owner?: UserWhereUniqueInput | null;
  template?: TemplateWhereUniqueInput | null;
  version?: string | null;
};
