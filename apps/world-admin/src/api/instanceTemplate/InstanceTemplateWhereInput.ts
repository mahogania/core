import { StringFilter } from "../../util/StringFilter";
import { LinkedRespawnWhereUniqueInput } from "../linkedRespawn/LinkedRespawnWhereUniqueInput";

export type InstanceTemplateWhereInput = {
  id?: StringFilter;
  linkedRespawns?: LinkedRespawnWhereUniqueInput;
};
