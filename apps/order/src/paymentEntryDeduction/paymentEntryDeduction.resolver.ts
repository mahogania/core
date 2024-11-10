import * as graphql from "@nestjs/graphql";
import { PaymentEntryDeductionResolverBase } from "./base/paymentEntryDeduction.resolver.base";
import { PaymentEntryDeduction } from "./base/PaymentEntryDeduction";
import { PaymentEntryDeductionService } from "./paymentEntryDeduction.service";

@graphql.Resolver(() => PaymentEntryDeduction)
export class PaymentEntryDeductionResolver extends PaymentEntryDeductionResolverBase {
  constructor(protected readonly service: PaymentEntryDeductionService) {
    super(service);
  }
}
