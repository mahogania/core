import * as graphql from "@nestjs/graphql";
import { PaymentReconciliationLogAllocationResolverBase } from "./base/paymentReconciliationLogAllocation.resolver.base";
import { PaymentReconciliationLogAllocation } from "./base/PaymentReconciliationLogAllocation";
import { PaymentReconciliationLogAllocationService } from "./paymentReconciliationLogAllocation.service";

@graphql.Resolver(() => PaymentReconciliationLogAllocation)
export class PaymentReconciliationLogAllocationResolver extends PaymentReconciliationLogAllocationResolverBase {
  constructor(
    protected readonly service: PaymentReconciliationLogAllocationService
  ) {
    super(service);
  }
}
