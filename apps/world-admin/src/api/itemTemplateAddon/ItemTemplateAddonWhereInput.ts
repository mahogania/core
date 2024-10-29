import { StringFilter } from "../../util/StringFilter";
import { ItemTemplateListRelationFilter } from "../itemTemplate/ItemTemplateListRelationFilter";

export type ItemTemplateAddonWhereInput = {
  id?: StringFilter;
  itemTemplates?: ItemTemplateListRelationFilter;
};
