import { SceneTemplate as TSceneTemplate } from "../api/sceneTemplate/SceneTemplate";

export const SCENETEMPLATE_TITLE_FIELD = "id";

export const SceneTemplateTitle = (record: TSceneTemplate): string => {
  return record.id?.toString() || String(record.id);
};
