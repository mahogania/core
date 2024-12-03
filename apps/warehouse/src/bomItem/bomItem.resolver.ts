import * as graphql from "@nestjs/graphql";
import { BomItemResolverBase } from "./base/bomItem.resolver.base";
import { BomItem } from "./base/BomItem";
import { BomItemService } from "./bomItem.service";

@graphql.Resolver(() => BomItem)
export class BomItemResolver extends BomItemResolverBase {
  constructor(protected readonly service: BomItemService) {
    super(service);
  }
}
