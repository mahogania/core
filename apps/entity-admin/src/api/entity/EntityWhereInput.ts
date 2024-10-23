import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { AssociationListRelationFilter } from "../association/AssociationListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type EntityWhereInput = {
  description?: StringNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  incomingAssociations?: AssociationListRelationFilter;
  name?: StringNullableFilter;
  outgoingAssociations?: AssociationListRelationFilter;
  owner?: UserWhereUniqueInput;
  template?: TemplateWhereUniqueInput;
  version?: StringNullableFilter;
};
