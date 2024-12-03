import * as graphql from "@nestjs/graphql";
import { StockEntryDetailResolverBase } from "./base/stockEntryDetail.resolver.base";
import { StockEntryDetail } from "./base/StockEntryDetail";
import { StockEntryDetailService } from "./stockEntryDetail.service";

@graphql.Resolver(() => StockEntryDetail)
export class StockEntryDetailResolver extends StockEntryDetailResolverBase {
  constructor(protected readonly service: StockEntryDetailService) {
    super(service);
  }
}
