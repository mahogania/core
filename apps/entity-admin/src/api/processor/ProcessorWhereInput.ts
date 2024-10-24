import { CommandListRelationFilter } from "../command/CommandListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ViewListRelationFilter } from "../view/ViewListRelationFilter";

export type ProcessorWhereInput = {
  commands?: CommandListRelationFilter;
  id?: StringFilter;
  views?: ViewListRelationFilter;
};
