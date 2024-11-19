import * as graphql from "@nestjs/graphql";
import { JournalEntryAccountResolverBase } from "./base/journalEntryAccount.resolver.base";
import { JournalEntryAccount } from "./base/JournalEntryAccount";
import { JournalEntryAccountService } from "./journalEntryAccount.service";

@graphql.Resolver(() => JournalEntryAccount)
export class JournalEntryAccountResolver extends JournalEntryAccountResolverBase {
  constructor(protected readonly service: JournalEntryAccountService) {
    super(service);
  }
}
