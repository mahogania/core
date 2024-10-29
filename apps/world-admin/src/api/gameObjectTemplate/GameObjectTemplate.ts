import { GameObjectTemplateAddon } from "../gameObjectTemplateAddon/GameObjectTemplateAddon";
import { GameObjectTemplateLocale } from "../gameObjectTemplateLocale/GameObjectTemplateLocale";
import { GameObject } from "../gameObject/GameObject";

export type GameObjectTemplate = {
  createdAt: Date;
  gameObjectTemplateAddons?: Array<GameObjectTemplateAddon>;
  gameObjectTemplateLocales?: Array<GameObjectTemplateLocale>;
  gameObjects?: Array<GameObject>;
  id: string;
  updatedAt: Date;
};
