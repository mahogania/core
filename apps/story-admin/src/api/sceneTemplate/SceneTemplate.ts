import { Scenario } from "../scenario/Scenario";

export type SceneTemplate = {
  createdAt: Date;
  id: string;
  name: string;
  scenarios?: Array<Scenario>;
  sceneUrl: string;
  updatedAt: Date;
};
