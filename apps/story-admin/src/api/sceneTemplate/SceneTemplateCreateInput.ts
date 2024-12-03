import { ScenarioCreateNestedManyWithoutSceneTemplatesInput } from "./ScenarioCreateNestedManyWithoutSceneTemplatesInput";

export type SceneTemplateCreateInput = {
  name: string;
  scenarios?: ScenarioCreateNestedManyWithoutSceneTemplatesInput;
  sceneUrl: string;
};
