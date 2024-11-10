import * as graphql from "@nestjs/graphql";
import { JournalEntryResolverBase } from "./base/journalEntry.resolver.base";
import { JournalEntry } from "./base/JournalEntry";
import { JournalEntryService } from "./journalEntry.service";

@graphql.Resolver(() => JournalEntry)
export class JournalEntryResolver extends JournalEntryResolverBase {
  constructor(protected readonly service: JournalEntryService) {
    super(service);
  }
}
