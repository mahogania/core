import * as graphql from "@nestjs/graphql";
import { ItemAttributeValueResolverBase } from "./base/itemAttributeValue.resolver.base";
import { ItemAttributeValue } from "./base/ItemAttributeValue";
import { ItemAttributeValueService } from "./itemAttributeValue.service";

@graphql.Resolver(() => ItemAttributeValue)
export class ItemAttributeValueResolver extends ItemAttributeValueResolverBase {
  constructor(protected readonly service: ItemAttributeValueService) {
    super(service);
  }
}
