import * as graphql from "@nestjs/graphql";
import { CrmNoteResolverBase } from "./base/crmNote.resolver.base";
import { CrmNote } from "./base/CrmNote";
import { CrmNoteService } from "./crmNote.service";

@graphql.Resolver(() => CrmNote)
export class CrmNoteResolver extends CrmNoteResolverBase {
  constructor(protected readonly service: CrmNoteService) {
    super(service);
  }
}
