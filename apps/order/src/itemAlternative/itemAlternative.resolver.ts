import * as graphql from "@nestjs/graphql";
import { ItemAlternativeResolverBase } from "./base/itemAlternative.resolver.base";
import { ItemAlternative } from "./base/ItemAlternative";
import { ItemAlternativeService } from "./itemAlternative.service";

@graphql.Resolver(() => ItemAlternative)
export class ItemAlternativeResolver extends ItemAlternativeResolverBase {
  constructor(protected readonly service: ItemAlternativeService) {
    super(service);
  }
}
