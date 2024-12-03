import * as graphql from "@nestjs/graphql";
import { PosOpeningEntryResolverBase } from "./base/posOpeningEntry.resolver.base";
import { PosOpeningEntry } from "./base/PosOpeningEntry";
import { PosOpeningEntryService } from "./posOpeningEntry.service";

@graphql.Resolver(() => PosOpeningEntry)
export class PosOpeningEntryResolver extends PosOpeningEntryResolverBase {
  constructor(protected readonly service: PosOpeningEntryService) {
    super(service);
  }
}
