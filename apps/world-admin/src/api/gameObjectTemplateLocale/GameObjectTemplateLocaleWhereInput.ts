import { GameObjectTemplateWhereUniqueInput } from "../gameObjectTemplate/GameObjectTemplateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type GameObjectTemplateLocaleWhereInput = {
  gameObjectTemplate?: GameObjectTemplateWhereUniqueInput;
  id?: StringFilter;
};