import { ZoneCreateNestedManyWithoutMapsInput } from "./ZoneCreateNestedManyWithoutMapsInput";

export type MapCreateInput = {
  name?: string | null;
  zones?: ZoneCreateNestedManyWithoutMapsInput;
};
