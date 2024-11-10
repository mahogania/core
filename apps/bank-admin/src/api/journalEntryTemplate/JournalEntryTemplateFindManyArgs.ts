import { JournalEntryTemplateWhereInput } from "./JournalEntryTemplateWhereInput";
import { JournalEntryTemplateOrderByInput } from "./JournalEntryTemplateOrderByInput";

export type JournalEntryTemplateFindManyArgs = {
  where?: JournalEntryTemplateWhereInput;
  orderBy?: Array<JournalEntryTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
