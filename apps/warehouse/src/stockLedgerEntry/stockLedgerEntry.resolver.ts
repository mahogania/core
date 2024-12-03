import * as graphql from "@nestjs/graphql";
import { StockLedgerEntryResolverBase } from "./base/stockLedgerEntry.resolver.base";
import { StockLedgerEntry } from "./base/StockLedgerEntry";
import { StockLedgerEntryService } from "./stockLedgerEntry.service";

@graphql.Resolver(() => StockLedgerEntry)
export class StockLedgerEntryResolver extends StockLedgerEntryResolverBase {
  constructor(protected readonly service: StockLedgerEntryService) {
    super(service);
  }
}
