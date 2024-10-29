import { GameObjectTemplateAddonListRelationFilter } from "../gameObjectTemplateAddon/GameObjectTemplateAddonListRelationFilter";
import { GameObjectTemplateLocaleListRelationFilter } from "../gameObjectTemplateLocale/GameObjectTemplateLocaleListRelationFilter";
import { GameObjectListRelationFilter } from "../gameObject/GameObjectListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameObjectTemplateWhereInput = {
  gameObjectTemplateAddons?: GameObjectTemplateAddonListRelationFilter;
  gameObjectTemplateLocales?: GameObjectTemplateLocaleListRelationFilter;
  gameObjects?: GameObjectListRelationFilter;
  id?: StringFilter;
};
