import * as graphql from "@nestjs/graphql";
import { PaymentOrderReferenceResolverBase } from "./base/paymentOrderReference.resolver.base";
import { PaymentOrderReference } from "./base/PaymentOrderReference";
import { PaymentOrderReferenceService } from "./paymentOrderReference.service";

@graphql.Resolver(() => PaymentOrderReference)
export class PaymentOrderReferenceResolver extends PaymentOrderReferenceResolverBase {
  constructor(protected readonly service: PaymentOrderReferenceService) {
    super(service);
  }
}
