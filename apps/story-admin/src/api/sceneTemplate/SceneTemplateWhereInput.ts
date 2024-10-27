import { StringFilter } from "../../util/StringFilter";
import { ScenarioListRelationFilter } from "../scenario/ScenarioListRelationFilter";

export type SceneTemplateWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  scenarios?: ScenarioListRelationFilter;
  sceneUrl?: StringFilter;
};
