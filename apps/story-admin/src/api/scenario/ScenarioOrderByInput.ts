import { SortOrder } from "../../util/SortOrder";

export type ScenarioOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  scenarioRegionsId?: SortOrder;
  sceneTemplateId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
