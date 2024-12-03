import * as graphql from "@nestjs/graphql";
import { PaymentReconciliationLogResolverBase } from "./base/paymentReconciliationLog.resolver.base";
import { PaymentReconciliationLog } from "./base/PaymentReconciliationLog";
import { PaymentReconciliationLogService } from "./paymentReconciliationLog.service";

@graphql.Resolver(() => PaymentReconciliationLog)
export class PaymentReconciliationLogResolver extends PaymentReconciliationLogResolverBase {
  constructor(protected readonly service: PaymentReconciliationLogService) {
    super(service);
  }
}
