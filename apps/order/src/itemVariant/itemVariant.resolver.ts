import * as graphql from "@nestjs/graphql";
import { ItemVariantResolverBase } from "./base/itemVariant.resolver.base";
import { ItemVariant } from "./base/ItemVariant";
import { ItemVariantService } from "./itemVariant.service";

@graphql.Resolver(() => ItemVariant)
export class ItemVariantResolver extends ItemVariantResolverBase {
  constructor(protected readonly service: ItemVariantService) {
    super(service);
  }
}
