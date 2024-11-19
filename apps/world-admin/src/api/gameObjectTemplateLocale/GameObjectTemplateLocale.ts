import { GameObjectTemplate } from "../gameObjectTemplate/GameObjectTemplate";

export type GameObjectTemplateLocale = {
  createdAt: Date;
  gameObjectTemplate?: GameObjectTemplate | null;
  id: string;
  updatedAt: Date;
};
