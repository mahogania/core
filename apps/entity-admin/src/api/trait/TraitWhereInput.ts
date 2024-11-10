import { CommandListRelationFilter } from "../command/CommandListRelationFilter";
import { FragmentListRelationFilter } from "../fragment/FragmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TraitWhereInput = {
  commands?: CommandListRelationFilter;
  fragments?: FragmentListRelationFilter;
  id?: StringFilter;
  template?: TemplateWhereUniqueInput;
};
