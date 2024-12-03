import { GameObjectTemplateWhereUniqueInput } from "../gameObjectTemplate/GameObjectTemplateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type GameObjectTemplateAddonWhereInput = {
  gameObjectTemplate?: GameObjectTemplateWhereUniqueInput;
  id?: StringFilter;
};
