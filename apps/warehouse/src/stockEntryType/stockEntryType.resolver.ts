import * as graphql from "@nestjs/graphql";
import { StockEntryTypeResolverBase } from "./base/stockEntryType.resolver.base";
import { StockEntryType } from "./base/StockEntryType";
import { StockEntryTypeService } from "./stockEntryType.service";

@graphql.Resolver(() => StockEntryType)
export class StockEntryTypeResolver extends StockEntryTypeResolverBase {
  constructor(protected readonly service: StockEntryTypeService) {
    super(service);
  }
}
