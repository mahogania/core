import * as graphql from "@nestjs/graphql";
import { JournalEntryTemplateResolverBase } from "./base/journalEntryTemplate.resolver.base";
import { JournalEntryTemplate } from "./base/JournalEntryTemplate";
import { JournalEntryTemplateService } from "./journalEntryTemplate.service";

@graphql.Resolver(() => JournalEntryTemplate)
export class JournalEntryTemplateResolver extends JournalEntryTemplateResolverBase {
  constructor(protected readonly service: JournalEntryTemplateService) {
    super(service);
  }
}
