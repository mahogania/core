import { SceneTemplateWhereInput } from "./SceneTemplateWhereInput";
import { SceneTemplateOrderByInput } from "./SceneTemplateOrderByInput";

export type SceneTemplateFindManyArgs = {
  where?: SceneTemplateWhereInput;
  orderBy?: Array<SceneTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
