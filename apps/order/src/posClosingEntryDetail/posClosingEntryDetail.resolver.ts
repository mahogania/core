import * as graphql from "@nestjs/graphql";
import { PosClosingEntryDetailResolverBase } from "./base/posClosingEntryDetail.resolver.base";
import { PosClosingEntryDetail } from "./base/PosClosingEntryDetail";
import { PosClosingEntryDetailService } from "./posClosingEntryDetail.service";

@graphql.Resolver(() => PosClosingEntryDetail)
export class PosClosingEntryDetailResolver extends PosClosingEntryDetailResolverBase {
  constructor(protected readonly service: PosClosingEntryDetailService) {
    super(service);
  }
}
