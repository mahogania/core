import * as graphql from "@nestjs/graphql";
import { PackingSlipItemResolverBase } from "./base/packingSlipItem.resolver.base";
import { PackingSlipItem } from "./base/PackingSlipItem";
import { PackingSlipItemService } from "./packingSlipItem.service";

@graphql.Resolver(() => PackingSlipItem)
export class PackingSlipItemResolver extends PackingSlipItemResolverBase {
  constructor(protected readonly service: PackingSlipItemService) {
    super(service);
  }
}
