import { GameObjectTemplate } from "../gameObjectTemplate/GameObjectTemplate";

export type GameObjectTemplateAddon = {
  createdAt: Date;
  gameObjectTemplate?: GameObjectTemplate | null;
  id: string;
  updatedAt: Date;
};
