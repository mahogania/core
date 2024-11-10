import { SceneTemplate as TSceneTemplate } from "../api/sceneTemplate/SceneTemplate";

export const SCENETEMPLATE_TITLE_FIELD = "name";

export const SceneTemplateTitle = (record: TSceneTemplate): string => {
  return record.name?.toString() || String(record.id);
};
