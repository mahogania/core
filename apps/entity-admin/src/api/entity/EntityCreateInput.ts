import { AssociationCreateNestedManyWithoutEntitiesInput } from "./AssociationCreateNestedManyWithoutEntitiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RepresentationWhereUniqueInput } from "../representation/RepresentationWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type EntityCreateInput = {
  PredecessorAssociations?: AssociationCreateNestedManyWithoutEntitiesInput;
  agent?: AgentWhereUniqueInput | null;
  description?: string | null;
  displayName?: string | null;
  name?: string | null;
  owner?: UserWhereUniqueInput | null;
  representation?: RepresentationWhereUniqueInput | null;
  successorAssociations?: AssociationCreateNestedManyWithoutEntitiesInput;
  template?: TemplateWhereUniqueInput | null;
  version?: string | null;
};
