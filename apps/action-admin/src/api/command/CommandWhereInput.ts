import { StringFilter } from "../../util/StringFilter";

export type CommandWhereInput = {
  help?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
};
