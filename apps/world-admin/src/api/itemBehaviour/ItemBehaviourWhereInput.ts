import { StringFilter } from "../../util/StringFilter";
import { ItemTemplateListRelationFilter } from "../itemTemplate/ItemTemplateListRelationFilter";

export type ItemBehaviourWhereInput = {
  id?: StringFilter;
  itemTemplates?: ItemTemplateListRelationFilter;
};
