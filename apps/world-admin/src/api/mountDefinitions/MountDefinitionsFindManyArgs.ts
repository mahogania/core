import { MountDefinitionsWhereInput } from "./MountDefinitionsWhereInput";
import { MountDefinitionsOrderByInput } from "./MountDefinitionsOrderByInput";

export type MountDefinitionsFindManyArgs = {
  where?: MountDefinitionsWhereInput;
  orderBy?: Array<MountDefinitionsOrderByInput>;
  skip?: number;
  take?: number;
};
