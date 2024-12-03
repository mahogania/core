import * as graphql from "@nestjs/graphql";
import { LandedCostVoucherResolverBase } from "./base/landedCostVoucher.resolver.base";
import { LandedCostVoucher } from "./base/LandedCostVoucher";
import { LandedCostVoucherService } from "./landedCostVoucher.service";

@graphql.Resolver(() => LandedCostVoucher)
export class LandedCostVoucherResolver extends LandedCostVoucherResolverBase {
  constructor(protected readonly service: LandedCostVoucherService) {
    super(service);
  }
}
