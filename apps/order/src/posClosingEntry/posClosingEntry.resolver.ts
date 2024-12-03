import * as graphql from "@nestjs/graphql";
import { PosClosingEntryResolverBase } from "./base/posClosingEntry.resolver.base";
import { PosClosingEntry } from "./base/PosClosingEntry";
import { PosClosingEntryService } from "./posClosingEntry.service";

@graphql.Resolver(() => PosClosingEntry)
export class PosClosingEntryResolver extends PosClosingEntryResolverBase {
  constructor(protected readonly service: PosClosingEntryService) {
    super(service);
  }
}
