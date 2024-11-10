import * as graphql from "@nestjs/graphql";
import { BomExplosionItemResolverBase } from "./base/bomExplosionItem.resolver.base";
import { BomExplosionItem } from "./base/BomExplosionItem";
import { BomExplosionItemService } from "./bomExplosionItem.service";

@graphql.Resolver(() => BomExplosionItem)
export class BomExplosionItemResolver extends BomExplosionItemResolverBase {
  constructor(protected readonly service: BomExplosionItemService) {
    super(service);
  }
}
