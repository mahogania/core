import { RealmCreateNestedManyWithoutWorldsInput } from "./RealmCreateNestedManyWithoutWorldsInput";

export type WorldCreateInput = {
  realms?: RealmCreateNestedManyWithoutWorldsInput;
};
