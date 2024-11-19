import * as graphql from "@nestjs/graphql";
import { PaymentReconciliationResolverBase } from "./base/paymentReconciliation.resolver.base";
import { PaymentReconciliation } from "./base/PaymentReconciliation";
import { PaymentReconciliationService } from "./paymentReconciliation.service";

@graphql.Resolver(() => PaymentReconciliation)
export class PaymentReconciliationResolver extends PaymentReconciliationResolverBase {
  constructor(protected readonly service: PaymentReconciliationService) {
    super(service);
  }
}
