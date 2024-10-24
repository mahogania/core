import { OpportunityCreateNestedManyWithoutContactsInput } from "./OpportunityCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  opportunities?: OpportunityCreateNestedManyWithoutContactsInput;
};
