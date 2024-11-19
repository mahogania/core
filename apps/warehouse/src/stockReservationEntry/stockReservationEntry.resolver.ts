import * as graphql from "@nestjs/graphql";
import { StockReservationEntryResolverBase } from "./base/stockReservationEntry.resolver.base";
import { StockReservationEntry } from "./base/StockReservationEntry";
import { StockReservationEntryService } from "./stockReservationEntry.service";

@graphql.Resolver(() => StockReservationEntry)
export class StockReservationEntryResolver extends StockReservationEntryResolverBase {
  constructor(protected readonly service: StockReservationEntryService) {
    super(service);
  }
}
