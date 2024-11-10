import * as graphql from "@nestjs/graphql";
import { ItemAttributeResolverBase } from "./base/itemAttribute.resolver.base";
import { ItemAttribute } from "./base/ItemAttribute";
import { ItemAttributeService } from "./itemAttribute.service";

@graphql.Resolver(() => ItemAttribute)
export class ItemAttributeResolver extends ItemAttributeResolverBase {
  constructor(protected readonly service: ItemAttributeService) {
    super(service);
  }
}
