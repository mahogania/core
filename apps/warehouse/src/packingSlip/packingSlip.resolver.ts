import * as graphql from "@nestjs/graphql";
import { PackingSlipResolverBase } from "./base/packingSlip.resolver.base";
import { PackingSlip } from "./base/PackingSlip";
import { PackingSlipService } from "./packingSlip.service";

@graphql.Resolver(() => PackingSlip)
export class PackingSlipResolver extends PackingSlipResolverBase {
  constructor(protected readonly service: PackingSlipService) {
    super(service);
  }
}
