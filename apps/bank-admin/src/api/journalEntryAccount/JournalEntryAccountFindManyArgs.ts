import { JournalEntryAccountWhereInput } from "./JournalEntryAccountWhereInput";
import { JournalEntryAccountOrderByInput } from "./JournalEntryAccountOrderByInput";

export type JournalEntryAccountFindManyArgs = {
  where?: JournalEntryAccountWhereInput;
  orderBy?: Array<JournalEntryAccountOrderByInput>;
  skip?: number;
  take?: number;
};
