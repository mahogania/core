import { StringFilter } from "../../util/StringFilter";
import { ItemTemplateWhereUniqueInput } from "../itemTemplate/ItemTemplateWhereUniqueInput";

export type ItemRandomBonusListTemplateWhereInput = {
  id?: StringFilter;
  itemTemplate?: ItemTemplateWhereUniqueInput;
};
