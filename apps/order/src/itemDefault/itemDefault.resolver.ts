import * as graphql from "@nestjs/graphql";
import { ItemDefaultResolverBase } from "./base/itemDefault.resolver.base";
import { ItemDefault } from "./base/ItemDefault";
import { ItemDefaultService } from "./itemDefault.service";

@graphql.Resolver(() => ItemDefault)
export class ItemDefaultResolver extends ItemDefaultResolverBase {
  constructor(protected readonly service: ItemDefaultService) {
    super(service);
  }
}
