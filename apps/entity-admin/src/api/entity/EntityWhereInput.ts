import { AssociationListRelationFilter } from "../association/AssociationListRelationFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RepresentationWhereUniqueInput } from "../representation/RepresentationWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type EntityWhereInput = {
  PredecessorAssociations?: AssociationListRelationFilter;
  agent?: AgentWhereUniqueInput;
  description?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  representation?: RepresentationWhereUniqueInput;
  successorAssociations?: AssociationListRelationFilter;
  template?: TemplateWhereUniqueInput;
  version?: StringNullableFilter;
};
