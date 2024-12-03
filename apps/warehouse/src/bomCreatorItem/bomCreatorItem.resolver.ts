import * as graphql from "@nestjs/graphql";
import { BomCreatorItemResolverBase } from "./base/bomCreatorItem.resolver.base";
import { BomCreatorItem } from "./base/BomCreatorItem";
import { BomCreatorItemService } from "./bomCreatorItem.service";

@graphql.Resolver(() => BomCreatorItem)
export class BomCreatorItemResolver extends BomCreatorItemResolverBase {
  constructor(protected readonly service: BomCreatorItemService) {
    super(service);
  }
}
