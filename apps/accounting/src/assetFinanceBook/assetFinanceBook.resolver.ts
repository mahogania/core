import * as graphql from "@nestjs/graphql";
import { AssetFinanceBookResolverBase } from "./base/assetFinanceBook.resolver.base";
import { AssetFinanceBook } from "./base/AssetFinanceBook";
import { AssetFinanceBookService } from "./assetFinanceBook.service";

@graphql.Resolver(() => AssetFinanceBook)
export class AssetFinanceBookResolver extends AssetFinanceBookResolverBase {
  constructor(protected readonly service: AssetFinanceBookService) {
    super(service);
  }
}
