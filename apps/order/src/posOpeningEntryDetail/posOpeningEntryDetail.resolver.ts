import * as graphql from "@nestjs/graphql";
import { PosOpeningEntryDetailResolverBase } from "./base/posOpeningEntryDetail.resolver.base";
import { PosOpeningEntryDetail } from "./base/PosOpeningEntryDetail";
import { PosOpeningEntryDetailService } from "./posOpeningEntryDetail.service";

@graphql.Resolver(() => PosOpeningEntryDetail)
export class PosOpeningEntryDetailResolver extends PosOpeningEntryDetailResolverBase {
  constructor(protected readonly service: PosOpeningEntryDetailService) {
    super(service);
  }
}
