import { ScenarioUpdateManyWithoutSceneTemplatesInput } from "./ScenarioUpdateManyWithoutSceneTemplatesInput";

export type SceneTemplateUpdateInput = {
  name?: string;
  scenarios?: ScenarioUpdateManyWithoutSceneTemplatesInput;
  sceneUrl?: string;
};
