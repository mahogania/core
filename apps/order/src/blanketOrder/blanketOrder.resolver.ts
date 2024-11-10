import * as graphql from "@nestjs/graphql";
import { BlanketOrderResolverBase } from "./base/blanketOrder.resolver.base";
import { BlanketOrder } from "./base/BlanketOrder";
import { BlanketOrderService } from "./blanketOrder.service";

@graphql.Resolver(() => BlanketOrder)
export class BlanketOrderResolver extends BlanketOrderResolverBase {
  constructor(protected readonly service: BlanketOrderService) {
    super(service);
  }
}
